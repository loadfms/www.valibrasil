import React, { Component } from 'react';
import Home from './pages/home/index'
import Aboutus from './pages/aboutus/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Aboutus/>
      </div>
    );
  }
}

export default App;
