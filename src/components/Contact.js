import React, { Component } from 'react';
import { Background, ContactBox } from '../styles/ContactStyles'

class Contact extends Component {
    render() {
      return (
        <Background>
            <a name="contact"/>
            <ContactBox>
                <section>
                    <h3>Contact me</h3>
                    <p>If you wish to contact me, please feel free to do so at ryan.grosser91@gmail.com or on my social media at <a href="https://github.com/RyanG91" rel="noopener noreferrer" target="_blank">GitHub</a>, <a href="https://www.linkedin.com/in/ryan-grosser-a360a1129/" rel="noopener noreferrer" target="_blank">LinkedIn</a> and <a href="https://medium.com/@ryan91" rel="noopener noreferrer" target="_blank">Medium</a>.</p>
                    <p>Thank you for visiting my website and have a great day.</p>
                </section>
            </ContactBox>
        </Background>
      );
    }
}

export default Contact;