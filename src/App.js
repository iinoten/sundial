import React, { Component } from 'react';
import './App.css';

import Test from './components/Test/Test';
import Ball from './components/Ball/Ball';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Test />
      <Ball />
      </div>
    );
  }
}

export default App;
