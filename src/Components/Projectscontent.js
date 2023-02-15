import React from 'react'
import { ExternalLink as Link } from 'react-external-link'
import WebAssetIcon from '@mui/icons-material/WebAsset';

function Projectscontent(props) {
  return (
    <>
      <li className = "itemss" id = {props.idin}>
        <div className = 'projectcontainer'>
          <figure className = "wrap">
              <img className = "contentImage"
              src = {props.src}
              />
          </figure>
          <div className = "text_info">
              <h1 className = "ContentTitle">{props.Title}</h1>
              <p className = "description">{props.body}</p>
          </div> 
          <Link className = "Link_to" href = {props.whereto}>
              {props.where}
          </Link>
        </div>
      </li>
    </>
  )
}

export default Projectscontent
