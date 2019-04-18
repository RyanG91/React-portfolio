import React, { Component } from 'react';
import { NavBarStyle } from'../styles/NavBarStyles'

function Links(props) {
  return (
      <a id={props.id} target="_self" href={props.link}>
        <p>{props.title}</p>
      </a>
  )
}

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <NavBarStyle>
          <Links id='tablecolumn' title="Home" link="/" />
          <Links id='tablecolumn' title="About Me" link="#aboutme" />
          <Links id='tablecolumn' title="Projects" link="#myprojects" />
          <Links id='tablecolumn' title="Contact Me" link="#contact" />
          <Links id='tablecolumn' title="GitHub Page" link="https://github.com/RyanG91" />
          <Links title="LinkedIn Page" link="https://www.linkedin.com/in/ryan-grosser-a360a1129/" />
        </NavBarStyle>
      </div>
    );
  }
}

export default NavBar;