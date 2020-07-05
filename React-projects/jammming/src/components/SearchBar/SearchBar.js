import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleTermChange = this.handleTermChange.bind(this);
    // this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleTermChange(ev) {
    this.props.onTermChange(ev.target.value);
  }

  render() {
    const { onSearch, onClear, term } = this.props;
    return (
      <div className='SearchBar'>
        <input
          onChange={this.handleTermChange}
          value={term}
          placeholder='Enter A Song, Album, or Artist'
          // onKeyPress={this.handleKeyPress}
        />
        <button className='SearchButton' onClick={onSearch}>
          SEARCH
        </button>
        <button className='SearchButton' onClick={onClear}>
          CLEAR
        </button>
      </div>
    );
  }
}

export default SearchBar;
