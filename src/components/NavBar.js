import React, { Component } from 'react';
import '../styles/NavBarStyles'

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav>
          <a id='tablecolumn' href="/">Home</a>
          <a id='tablecolumn' href="#aboutme">About Me</a>
          <a id='tablecolumn' href="#myprojects">Projects</a>
          <a id='tablecolumn' href="#contact">Contact Me</a>
          <a id='tablecolumn' href="https://github.com/RyanG91" rel="noopener noreferrer" target="_blank">GitHub Page </a>
          <a href="https://www.linkedin.com/in/ryan-grosser-a360a1129/" rel="noopener noreferrer" target="_blank">LinkedIn Page</a>
        </nav>
      </div>
    );
  }
}

export default NavBar;