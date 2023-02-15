import React from 'react'
import '../styles/Contact.css'
import backgroundcontact from '../Assets/bgi4.jpg'
import { ExternalLink } from 'react-external-link'

function Contact() {
  return (
    <div className = "contact" id = "contacts" style={{ backgroundImage: `url(${backgroundcontact})`}}>
      <div className = "textbox">
        <h1>Want to get in touch?</h1>
        <p>Contact me through any of these!</p>
      </div>
      <div className = "links">
        <ExternalLink href = "https://www.linkedin.com/in/junwoooh/">
          linkedin
        </ExternalLink>
        <ExternalLink href = "https://www.instagram.com/visionjwd">
          instagram
        </ExternalLink>
      </div>
    </div>
  )
}

export default Contact
