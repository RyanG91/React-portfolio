import React, { Component } from 'react';
import background from './images/background.jpg';
import logo from './images/logo.png'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="background">
          <div className="introBox">
            <div className="welcomeText">
              <h1>Hello, my name is Ryan and welcome to my website.</h1>
              <h3>I am an aspiring web developer and you have stumbled onto my portfolio page.</h3>
            </div>
            <img src={logo} className="logo" alt="logo" />
          </div>
        </div>
        <div className="backgroundTwo">
          <div className="briefBox">
            <h3>About me</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
