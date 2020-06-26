const clientId = REACT_APP_CLIENT_ID;
const client_id = 'CLIENT_ID'; // Your client id
const client_secret = 'CLIENT_SECRET'; // Your secret
const redirect_uri = 'REDIRECT_URI'; // Your redirect uri
const authAccountsUrl = 'https://acounts.spotify.com/authorize?';
const apiBaseUrl = 'https://api.spotify.com/v';
const uri = 'http://localhost:3000';
const scope = 'user-read-private user-read-email';

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
      window.location.hash = '';
    }
    if (!accessToken) {
      if (window.location.hash.includes('#access_token')) {
        accessToken = window.location.hash.match(/(#access_token=)(.*?)(&)/)[2];
        const expiresIn = window.location.hash.match(/(expires_in=)(\d*)/)[2];
        expirationTime = requestTime + expiresIn * 3600;
      } else {
        requestTime = Date.now();
        window.location.href = `${authorizationUrl}?client_id=${clientId}&scope=playlist-modify-public&redirect_uri=${uri}&response_type=token`;
      }
    }
    return accessToken;
  },

  buildauthorizationHeader() {
    const authorizationHeader = {
      Authorization: `Bearer ${this.getAccessToken()}`,
    };
    return authorizationHeader;
  },

  handleResponse(response) {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Error: No response');
  },

  getUserId() {
    if (userId) {
      return new Promise((resolve) => resolve(userId));
    }
    const getUserNameUrl = `${apiBaseUrl}/me`;
    return fetch(getUserNameUrl, {
      headers: this.buildauthorizationHeader(),
    }).then((jsonResponse) => {
      if (jsonResponse.id) {
        userId = jsonResponse.id;
        return jsonResponse.id;
      }
      throw new Error('userId: unknown format');
    });
  },

  getUserPlaylists() {
    Spotify.getAccessToken();
    // TODO WE read all playlists (for loop), not only the first 50 (limitation of the API)
    return Spotify.getUserId().then(() => {
      const getPlaylistsUrl = `${apiBaseUrl}/users/${userId}/playlists?limit=50`;
      return fetch(getPlaylistsUrl, {
        headers: this.buildAuthorizationHeader(),
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
    const fetchUrl = `${apiBaseUrl}/search?type=track&q=${term}`;
    return fetch(fetchUrl, {
      headers: this.buildAuthorizationHeader(),
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
};

export default Spotify;
