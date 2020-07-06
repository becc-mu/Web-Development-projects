import CONFIG from './config';
const CLIENT_ID = CONFIG.clientId;
const REDIRECT_URI = CONFIG.uri;
const AUTH_URL = 'https://accounts.spotify.com/authorize';
const apiBaseUrl = 'https://api.spotify.com/v1';
let accessToken;
let requestTime;
let expirationTime;
let userId;

const Spotify = {
  getAccessToken() {
    if (expirationTime && Date.now() > expirationTime) {
      requestTime = undefined;
      expirationTime = undefined;
      accessToken = undefined;
      userId = undefined;
      window.location.hash = '';
    }
    if (!accessToken) {
      if (window.location.hash.includes('#access_token')) {
        accessToken = window.location.hash.match(/(#access_token=)(.*?)(&)/)[2];
        const expiresIn = window.location.hash.match(/(expires_in=)(\d*)/)[2];
        expirationTime = requestTime + expiresIn * 1000;
      } else {
        requestTime = Date.now();
        window.location.href = `${AUTH_URL}?client_id=${CLIENT_ID}&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}&response_type=token`;
      }
    }
    return accessToken;
  },

  authHeader() {
    const authorizationHeader = {
      Authorization: `Bearer ${this.getAccessToken()}`,
    };
    return authorizationHeader;
  },

  handleResponse(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Spotify Response '${response.statusText}'`);
  },

  getUserId() {
    if (userId) {
      return new Promise((resolve) => resolve(userId));
    }
    const getUseUrl = `${apiBaseUrl}/me`;
    return fetch(getUseUrl, {
      headers: this.authHeader(),
    })
      .then(this.handleResponse)
      .then((jsonResponse) => {
        if (jsonResponse.id) {
          userId = jsonResponse.id;
          return jsonResponse.id;
        }
        throw new Error('userId: incorrect format');
      });
  },

  getUserPlaylists() {
    Spotify.getAccessToken();
    return Spotify.getUserId().then(() => {
      const getPlaylistsUrl = `${apiBaseUrl}/users/${userId}/playlists?limit=30`;
      return fetch(getPlaylistsUrl, {
        headers: this.authHeader(),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Request failed: playlists not obtained');
        })
        .then((jsonResponse) => {
          if (jsonResponse.items) {
            return jsonResponse.items.map((playlist) => ({
              id: playlist.id,
              title: playlist.name,
              numberOfTracks: playlist.tracks.total,
            }));
          }
          return [];
        });
    });
  },

  search(term) {
    const searchUrl = `${apiBaseUrl}/search?type=track&q=${term}`;
    return fetch(searchUrl, {
      headers: this.authHeader(),
    })
      .then(this.handleResponse)
      .then((jsonResponse) => {
        if (jsonResponse.tracks) {
          return jsonResponse.tracks.items.map((item) => ({
            id: item.id,
            title: item.name,
            album: item.album.name,
            artist: item.artists[0].name,
            uri: item.uri,
          }));
        }
        throw new Error('Search results: bad format');
      });
  },

  loadTracks(playlistId) {
    console.log(`load tracks of playlist with id ${playlistId}`);
    Spotify.getAccessToken();
    return Spotify.getUserId().then(() => {
      const getPlaylistTracksUrl = `${apiBaseUrl}/users/${userId}/playlists/${playlistId}/tracks`;
      return fetch(getPlaylistTracksUrl, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Request failed: tracks from playlist not obtained');
        })
        .then((jsonResponse) => {
          if (jsonResponse.items) {
            return jsonResponse.items.map((item) => ({
              id: item.track.id,
              title: item.track.name,
              album: item.track.album.name,
              artist: item.track.artists[0].name,
              uri: item.track.uri,
            }));
          }
          console.log('no tracks in that playlist.');
          return [];
        });
    });
  },

  createPlaylist(title) {
    const createPlaylistUrl = `${apiBaseUrl}/users/${userId}/playlists`;
    return fetch(createPlaylistUrl, {
      method: 'POST',
      headers: this.authHeader(),
      body: JSON.stringify({ name: title }),
    })
      .then(this.handleResponse)
      .then((jsonResponse) => {
        if (jsonResponse.id) {
          return jsonResponse.id;
        }
        throw new Error('received no playlistId');
      });
  },

  saveTracksToPlaylist(playlistId, uriList) {
    const playlistUrl = `${apiBaseUrl}/users/${userId}/playlists/${playlistId}/tracks`;
    return fetch(playlistUrl, {
      method: 'POST',
      headers: this.authHeader(),
      body: JSON.stringify({ uris: uriList }),
    }).then(this.handleResponse);
  },

  save(title, tracks) {
    const uriList = tracks.map((track) => track.uri);
    return Spotify.getUserId()
      .then(() => Spotify.createPlaylist(title))
      .then((playlistId) => Spotify.saveTracksToPlaylist(playlistId, uriList));
  },

  remove(playlistId) {
    console.log(`remove playlist with id ${playlistId}`);
    Spotify.getAccessToken();
    return Spotify.getUserId().then(() => {
      const removePlaylistUrl = `${apiBaseUrl}/users/${userId}/playlists/${playlistId}/followers`;
      return fetch(removePlaylistUrl, {
        method: 'DELETE',
        headers: this.authHeader(),
      }); // no response expected
    });
  },
};

export default Spotify;
