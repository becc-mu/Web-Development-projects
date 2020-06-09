import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import '../SearchBar/SearchBar.css';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
