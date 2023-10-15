import React from 'react'
import "./Location.scss"
import { Link } from 'react-router-dom'



function Location(props) {
  return (
    
      <Link to="/flat" state={{appartementId: props.id}}>
        <article>
         <img src={props.imageUrl} alt="" />
         <h2>{props.title}</h2>
        </article>
      </Link>
         
    
  )
}

export default Location