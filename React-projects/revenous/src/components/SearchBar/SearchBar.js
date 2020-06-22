import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  handleSortByOption(ev) {
    if (ev.key === 'Enter') {
      this.props.searchYelp(
        this.state.term,
        this.state.location,
        this.state.sortBy
      );
    }
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption }, () => {
      if (this.state.term && this.state.location) {
        this.props.searchYelp(
          this.state.term,
          this.state.location,
          this.state.sortBy
        );
      }
    });
  }

  handleTermChange(ev) {
    this.setState({ term: ev.target.value });
  }

  handleLocationChange(ev) {
    this.setState({ location: ev.target.value });
  }

  handleSearch(event) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );

    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionsValue = this.sortByOptions[sortByOption];
      return (
        <li
          className={this.getSortByClass(sortByOptionsValue)}
          key={sortByOptionsValue}
          onClick={this.handleSortByChange.bind(this, sortByOptionsValue)}
          onKeyPress={this.handleSortByOption.bind(this, sortByOptionsValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }
  render() {
    return (
      <div className='SearchBar'>
        <div className='SearchBar-sort-options'>
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className='SearchBar-fields'>
          <input
            placeholder={'Search Businesses'}
            onChange={this.handleTermChange}
            onKeyPress={this.handleSortByOption}
          />
          <input
            placeholder={'Where?'}
            onChange={this.handleLocationChange}
            onKeyPress={this.handleSortByOption}
          />
        </div>

        <div className='SearchBar-submit'>
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
