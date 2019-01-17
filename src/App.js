import React, { Component } from 'react';
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Intro />
        <AboutMe />
      </div>
    );
  }
}

export default App;
