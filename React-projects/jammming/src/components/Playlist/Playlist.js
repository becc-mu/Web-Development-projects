import React from 'react';
import TrackList from '../TrackList/TrackList';

import './Playlist.css';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }
  handleNameChange(ev) {
    this.props.onNameChange(ev.target.value);
  }
  handleTitleChange(event) {
    this.props.onTitleChange(event.target.value);
  }

  render() {
    const {
      playlistTitle,
      tracks,
      playlistTracks,
      onRemove,
      onSave,
      onClear,
    } = this.props;
    const action = {
      symbole: '-',
      func: this.props.onRemoveTrack,
    };
    return (
      <div className='Playlist'>
        <input
          placeholder={'Enter title'}
          value={this.props.title}
          onChange={this.handleTitleChange}
        />
        <TrackList tracks={tracks} action={action} isRemoval={true} />
        <button className='Playlist-save' onClick={onSave}>
          SAVE TO SPOTIFY
        </button>
        <button className='Playlist-save' onClick={onClear}>
          CLEAR
        </button>
      </div>
    );
  }
}

export default Playlist;
