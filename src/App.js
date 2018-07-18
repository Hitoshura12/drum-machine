import React, { Component } from 'react';
import Drummachine from './components/Drummachine'
import './App.css';
import Display from './components/Display'
class App extends Component {
  render() {
    return (
      <div className="App">

          <div id="drum-machine">
      <Drummachine />
      </div>
      </div>
    );
  }
}

export default App;
