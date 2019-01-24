import React, { Component } from 'react';
import '../styles/Contact.css'

class Contact extends Component {
    render() {
      return (
        <div class="backgroundFour">
            <a name="contact"/>
            <div class="contactBox">
                <section>
                    <h3>Contact me</h3>
                    <p>If you wish to contact me, please feel free to do so at ryan.grosser91@gmail.com or on my social media at <a href="https://github.com/RyanG91" rel="noopener noreferrer" target="_blank">GitHub</a>, <a href="https://www.linkedin.com/in/ryan-grosser-a360a1129/" rel="noopener noreferrer" target="_blank">LinkedIn</a> and <a href="https://medium.com/@ryan91" rel="noopener noreferrer" target="_blank">Medium</a>.</p>
                    <p>Thank you for visiting my website and have a great day.</p>
                </section>
            </div>
        </div>
      );
    }
}

export default Contact;