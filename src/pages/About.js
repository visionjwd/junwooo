import React from 'react'
import '../styles/About.css'
import photo from '../Assets/contactCard.jpeg'
import {Link} from "react-router-dom"
import aboutbgi from '../Assets/aboutbgi.jpg'

function About() {
  return (
    <div className = "about" style={{ backgroundImage: `url(${aboutbgi})`}}>
      <div className = "Title">
        <h1>About Me</h1>
        <p>Hi! Im a mechanical engineering student currently studying Mechanical Engineering at the University of Waterloo. 
           My current interests are Mechanical Design Analysis and Aerodynamics studies. I also love front-end development, specifically with React and Next js libraries. 
           I come from a creative production background, founding JWD Creative House in 2022 to provide various digital production needs for local businesses around Toronto. 
           Feel free to reach out to me via my social media and email below!</p>
      </div>
      <div className = "photo">
        <img src = {photo}/>
      </div>
      <div className = "rightSide">
        <h1>Take a look at what I'm working on right now!</h1>
        <Link to ='/projects'>
          <button>PROJECTS</button>
        </Link>
      </div>
    </div>
  )
}

export default About
