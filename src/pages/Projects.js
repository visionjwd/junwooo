import React from 'react'
import JWDCreativepic from '../Assets/JWDWD.png'
import Projectscontent from '../Components/Projectscontent'
import Projectbgi from '../Assets/projectbgi.jpg'
import kociemba from '../Assets/kociemba.png'
import uwfmcars from '../Assets/uwfmcar.jpeg'
import '../styles/Project.css'


function Projects() {
  return (
    <div className ="projects" style={{ backgroundImage: `url(${Projectbgi})`}}>
        <div className = "Title">
            <h1>PROJECTS</h1>
        </div>
        <div className = "projectlist">
          <div className = "containerbox">
            <ul className = "descriptionbox">
              <Projectscontent 
              idin = 'item1'
              src = {JWDCreativepic}
              Title = "JWD Creative House"
              body =  'Founded in 2022, JWD Creative House focuses on creating eye-catching contents for local businesses in Toronto specializing in media production, web development/UI design, and digital marketing. Major clients include: Importfest, Importexpo, Asobu, Mini.'
              whereto = "https://www.jwdcreativehouse.com"
              where = "Website"/>
               <Projectscontent 
              idin = 'item2'
              src = {uwfmcars}
              Title = "Formula SAE Aerodynamics"
              body =  'Manufactured carbon fiber front end plate parts for UW Formula SAE team. Currently an active member, working on carbon fiber manufacturing using vacuum sealed conventional resin methods. '/>
              <Projectscontent 
              idin = 'item3'
              src = {kociemba}
              Title = "Rubiks Cube Solver, Better Than You"
              body =  'A Rubiks Cube solving robot made with Logo Mindstorm EV3 kit, with the C++ Kociemba algorithm implemented to output the instructions to Robot C code. \n - C++ algorithm takes in the initial state and outputs the inputs in Robot C code'/>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Projects
