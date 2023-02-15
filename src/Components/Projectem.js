import React from 'react'
import {Link} from 'react-router-dom'

function Projectem(props) {
  return (
    <>
      <li className =  "project_items">
        <Link className = "project_item_link" to = {props.path}>
            <figure className = "project_item_wrap" data-category = {props.label}>
                <img 
                className = "item_img"
                src = {props.src}
                />
            </figure>
            <div className = "project_item_info">
                <h5 className = "project_item_text">{props.text}</h5>
            </div>
        </Link> 
      </li>
    </>
  )
}

export default Projectem
