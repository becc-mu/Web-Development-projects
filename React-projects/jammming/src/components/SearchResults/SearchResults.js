import React from 'react';
import TrackList from '../TrackList/TrackList';

import './SearchResults.css';

function SearchResults({ tracks, onAddTrack, isRemoval }) {
  const action = {
    symbol: '+',
    func: onAddTrack,
  };
  return (
    <div className='SearchResults'>
      <h2>Results</h2>
      <TrackList tracks={tracks} action={action} isRemoval={false} />
    </div>
  );
}

export default SearchResults;
