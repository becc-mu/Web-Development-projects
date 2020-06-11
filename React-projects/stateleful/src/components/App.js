import React from 'react';
import './App.css';

import Sibling from './Sibling';
import Parent from './Parent';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Sibling />
        <Parent />
      </div>
    );
  }
}

export default App;
