import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';
import Hello from './components/Hello';

class App extends Component {

  render() {
    return (
      <div className="container">
        <Clock />
        <Hello />
      </div>
    );
  }
}

export default App;
