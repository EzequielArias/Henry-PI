import React from 'react'
import '../styles/Initial.css'
import wallpaper from '../assets/rico.jpg'
import { Link } from 'react-router-dom'

const Initial = () => {
  return (
    <div className='initial-container'>
        <img src={wallpaper} alt='backgroundYummy'/>
        <h1>Yummy's</h1>
        <p>You don't know what to cook?</p>
        <Link to='/Home' className='ov-btn-grow-ellipse'>Click Me !</Link>
    </div>
  )
}

export default Initial
