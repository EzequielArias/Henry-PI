import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({id,name,image,healthScore,diets}) => {

  return (
    <div className='Card-container'>
      <Link to={`/home/${id}`}>
      <img src={image} alt='etc'/>
      <p>{name}</p>
      <p>{healthScore}</p>
      <span>{diets}</span>
      </Link>
    </div>
  )
}

export default Card
