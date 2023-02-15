import React from 'react'
import { Link } from "react-router-dom";
import Bgi from "../Assets/bgi2.jpg";
import '@fontsource/roboto/400.css';
import '../styles/Hero.css'

function Hero() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Bgi})`}}>
      <div className="headerContainer" >
        <div className = "Name">
          <span>J</span>
          <span>U</span>
          <span>N</span>
          <span>&nbsp;</span>
          <span>W</span>
          <span>O</span>
          <span>O</span>
          <span>&nbsp;</span>
          <span>O</span>
          <span>H</span>
        </div>
        <p>Welcome to my website</p>
        <Link to="/projects">
            <button> Come take a look!</button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
