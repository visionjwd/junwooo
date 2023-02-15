import React from 'react'
import '../styles/Cards.css'
import JWDCreative from '../Assets/jwdcreative.png'
import UWFM from '../Assets/UWFM.jpg'
import cube from '../Assets/unnamed.gif'
import Projectem from './Projectem'

function cards() {
  return (
    <div className = "cards"> 
      <div className = "textcontainer">
        <h1>What am I up to now?</h1>
        <p>Take a look at my current and past projects.</p>
      </div>
      <div className = "itembox">
        <div className = "itemcontainer">
          <div className = "wrapper">
           <ul className = 'items'>
              <Projectem 
              path = '/projects#item1'
              src  = {JWDCreative}
              text='JWD Creative House'
              /> 
              <Projectem 
              path = '/projects#item2'
              src  = {UWFM}
              text='UW Formula SAE Aerodynamics'
              />
              <Projectem
              path = '/projects#item3'
              src = {cube}
              text = "Rubiks Cube Solver" 
              />
            </ul>
          </div>
       </div>
      </div>
    </div>
  )
}

export default cards
