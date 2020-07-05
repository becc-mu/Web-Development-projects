import React from 'react';
import Track from '../Track/Track';

import './TrackList.css';

class TrackList extends React.Component {
  render() {
    const { tracks, action, onAdd, onRemove, isRemoval } = this.props;
    return (
      <ul className='TrackList'>
        {tracks &&
          tracks.map((track) => (
            <Track
              key={track.id}
              track={track}
              action={action}
              onAdd={onAdd}
              onRemove={onRemove}
              isRemoval={isRemoval}
            />
          ))}
      </ul>
    );
  }
}

export default TrackList;
