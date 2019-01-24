import React, { Component } from 'react';
import logo from '../images/logo.png'
import { Background, IntroBox, WelcomeText, Logo } from '../styles/IntroStyles'

class Intro extends Component {
    render() {
      return (
        <Background>
            <IntroBox>
                <section>
                    <Logo src={logo} alt="logo" />
                    <WelcomeText>
                        <h1>Hello, my name is Ryan and welcome to my website.</h1>
                        <h3>I am an aspiring web developer and you have stumbled onto my portfolio page.</h3>
                    </WelcomeText>
                </section>
            </IntroBox>
        </Background>
      );
    }
}

export default Intro;