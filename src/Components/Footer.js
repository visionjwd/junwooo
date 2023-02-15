import React from 'react'
import { ExternalLink } from 'react-external-link';
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import YoutubeIcon from "@mui/icons-material/YouTube"

import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className = "socialMedia">
          <ExternalLink href = "https://www.instagram.com/visionjwd">
            <InstagramIcon/>
          </ExternalLink>
          <ExternalLink href = "https://www.linkedin.com/in/junwoooh/">
            <LinkedInIcon/>
          </ExternalLink>
          <YoutubeIcon/>
          </div>
        <p> Jun Woo Oh, 2023</p>
    </div>
  )
}

export default Footer
