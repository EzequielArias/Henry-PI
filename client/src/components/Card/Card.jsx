import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({id,name,image,healthScore}) => {
  console.log("llego llego llego")
  return (
    <div style={{height : "100px"}}>
      <Link to={`/${id}`}/>
      <p>{healthScore}</p>
      <p>{name}</p>
      <img src={image} alt='etc'/>
    </div>
  )
}

export default Card
