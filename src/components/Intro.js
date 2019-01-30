import React, { Component } from 'react';
import logo from '../images/logo.png'
import { Background, IntroBox, WelcomeText, Logo } from '../styles/IntroStyles'
import { HeadingOne, HeadingThree } from '../styles/FontAndText'

class Intro extends Component {
  render() {
    return (
      <Background>
        <IntroBox>
          <section>
            <Logo src={logo} alt="logo" />
            <WelcomeText>
              <HeadingOne>Hello, my name is Ryan and welcome to my website.</HeadingOne>
              <HeadingThree>I am an aspiring web developer and you have stumbled onto my portfolio page.</HeadingThree>
            </WelcomeText>
          </section>
        </IntroBox>
      </Background>
    );
  }
}

export default Intro;