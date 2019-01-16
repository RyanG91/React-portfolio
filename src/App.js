import React, { Component } from 'react';
import Intro from './components/Intro'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Intro />
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
