import React, { Component } from 'react';
import '../styles/MyProjects.css'
import ImageSlider from './ImageSlider'
import ShoppingList from '../images/Shopping-list.png'
import TwoSidedMarketplace from '../images/TwoSidedMarketplace.png'
import RealWorldApp from '../images/RealWorldApp.png'

class MyProjects extends Component {
    render() {
      return (
        <div className="backgroundThree">
            <div className="projects">
                <div className="project-margin">
                    <h3>Some of the projects I've worked on:</h3>
                    <p>Some of the projects I have participated in include the following:</p>
                    <ul>
                        <li>Shopping-list app with Ruby</li>
                        <li>Two sided marketplace app with Rails</li>
                        <li>A real world app using MERN</li>
                        <li>Portfolio webpage</li>            
                    </ul>
                    <p> There will be more added over the coming months and years. </p>
                </div>
                
                <div className="imageSlider">
                    <ImageSlider />
                </div>

            </div>
        </div>
      );
    }
}

export default MyProjects;