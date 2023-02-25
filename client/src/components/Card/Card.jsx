import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({id,name,image,healthScore}) => {

  return (
    <div className='Card-container'>
      <Link to={`/home/:${id}`}>
      <img src={image} alt='etc'/>
      <p>{name}</p>
      <p>{healthScore}</p>
      </Link>
    </div>
  )
}

export default Card
