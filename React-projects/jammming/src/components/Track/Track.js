import React from 'react';
import ReactDOM from 'react-dom';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.action.func(this.props.track);
  }

  render() {
    const { track, action } = this.props;
    return (
      <div>
        <li className='Track'>
          <div className='Track-information' key={track.id}>
            <h3>{track.title}</h3>
            <p>
              {track.artist} | {track.album}
            </p>
          </div>
          <a className='Track-action' onClick={this.handleClick}>
            {action.symbol}
          </a>
        </li>
      </div>
    );
  }
}

export default Track;
