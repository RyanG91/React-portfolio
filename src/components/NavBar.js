import React, { Component } from 'react';
import { NavBarStyle } from'../styles/NavBarStyles'

function Links(props) {
  return (
    <div>
      <a target="_self" href={props.link}>
        <p>{props.title}</p>
      </a>      
    </div>
  )
}

class NavBar extends Component {



  render() {
    return (
      <div className="NavBar">
        <NavBarStyle>
          <Links title="Home" link="/" />
          <Links title="About Me" link="#aboutme" />
          <Links title="Projects" link="#myprojects" />
          <Links title="Contact Me" link="#contact" />
          <Links title="GitHub Page" link="https://github.com/RyanG91" />
          <Links title="LinkedIn Page" link="https://www.linkedin.com/in/ryan-grosser-a360a1129/" />
        </NavBarStyle>
      </div>
    );
  }
}

export default NavBar;