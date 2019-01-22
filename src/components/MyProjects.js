import React, { Component } from 'react';
import '../styles/MyProjects.css'
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
                
                <div>
                    <div>
                        <a href="https://github.com/RyanG91/Ruby-shopping-list" rel="noopener noreferrer" target="_blank"> 
                            <img src={ShoppingList} className="projectImages" alt="Shopping List"/> 
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/RyanG91/delivery" rel="noopener noreferrer" target="_blank">
                            <img src={TwoSidedMarketplace} className="projectImages" alt="Two Sided Marketplace" />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/jgeltchrobb/Agnes" rel="noopener noreferrer" target="_blank">
                            <img src={RealWorldApp} className="projectImages" alt="Real World Project" />
                        </a>
                    </div>
                    <div>
                        <button>❮ Prev</button>
                        <button>Next ❯</button>
                    </div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                </div>

            </div>
        </div>
      );
    }
}

export default MyProjects;