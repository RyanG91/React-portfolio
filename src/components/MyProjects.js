import React, { Component } from 'react';
import ImageSlider from './ImageSlider'
import { Background, ProjectBox, ProjectImages, ProjectMargin } from '../styles/MyProjectsStyles'
import { HeadingThree } from '../styles/FontAndText'

class MyProjects extends Component {
  render() {
    return (
      <Background>
          <a name="myprojects"/>
          <ProjectBox>
            <ProjectMargin>
              <HeadingThree>Some of the projects I've worked on:</HeadingThree>
              <p>Some of the projects I have participated in include the following:</p>
              <ul>
                <li><a href="https://github.com/RyanG91/Ruby-shopping-list" rel="noopener noreferrer" target="_blank">Shopping-list app</a> with Ruby</li>
                <li><a href="https://github.com/RyanG91/delivery" rel="noopener noreferrer" target="_blank">Two sided marketplace app</a> with Rails</li>
                <li><a href="https://github.com/jgeltchrobb/Agnes" rel="noopener noreferrer" target="_blank">A real world app</a> using MERN</li>
                <li>Portfolio webpage</li>
              </ul>
              <p> There will be more added over the coming months and years. </p>
            </ProjectMargin>

            <ProjectImages>
              <ImageSlider />
            </ProjectImages>

          </ProjectBox>
      </Background>
    );
  }
}

export default MyProjects;