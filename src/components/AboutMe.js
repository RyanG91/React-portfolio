import React, { Component } from 'react';
import aboutmepic from '../images/aboutmepic.png'
import '../styles/AboutMe.css'

class AboutMe extends Component {
    render() {
      return (
        <div className="backgroundTwo">
          <a name="aboutme"/>
          <div className="briefBox">
            <section>
                <img className="aboutpic" src={aboutmepic} alt="aboutpic" />
                <h3>About me</h3>
                <div className="about-me-margin">
                    <p>I am a 27 year old web developer, previously studying at Coder-academy.</p>
                    <p>In the past I have completed a Masters of Information Technology (Library and Information Science) at Queensland University of Technology and a Bachelor of Arts (International Relations & Ancient History) at the University of Queensland.</p>
                    <p>My experience includes:</p>
                    <ol>
                        <li>Training Assistant at Coder Academy</li>
                        <li>One month full time internship at Two Red Kites</li>
                        <li>Participation in hackathons such as RHOK Winter 2018</li>
                    </ol>
                    <p>I have training in the following types of code:</p>
                    <ul>
                        <li>Ruby</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Rails</li>
                        <li>React</li>
                        <li>Node JS</li>
                        <li>Ember</li>
                    </ul>
                    <p>I have completed a number of different projects, some shown below while others are on my GitHub profile.</p>
                </div>
            </section>
          </div>
        </div>
      );
    }
}

export default AboutMe;