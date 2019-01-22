import React, { Component } from 'react';
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import MyProjects from './components/MyProjects'
import Contact from './components/Contact'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Intro />
        <AboutMe />
        <MyProjects />
        <Contact />
      </div>
    );
  }
}

export default App;
