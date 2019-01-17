import React, { Component } from 'react';
import background from '../images/background.jpg';
import logo from '../images/logo.png'
import '../styles/Intro.css'

class Intro extends Component {
    render() {
      return (
        <div className="background">
            <div className="introBox">
                <section>
                    <img src={logo} className="logo" alt="logo" />
                    <div className="welcomeText">
                        <h1>Hello, my name is Ryan and welcome to my website.</h1>
                        <h3>I am an aspiring web developer and you have stumbled onto my portfolio page.</h3>
                    </div>
                </section>
            </div>
        </div>
      );
    }
  }

// <div class="area1">
//   <div class="intro">
//     <section>
//       <img class="logo" src="images/RG.png" alt="logo">
//       <div class="typewriter">
//         <h1> Hello, my name is Ryan and welcome to my website.</h1>
//         <h2> I am an aspiring web developer and you have stumbled onto my portfolio page.</h2>
//       </div>
//     </section>
//   </div>
// </div>
  
  export default Intro;