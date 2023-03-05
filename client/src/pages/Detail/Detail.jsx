import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getRecipesById } from '../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import './Detail.css'

const Detail = () => {

    let { id } = useParams()
    let dispatch = useDispatch()
    let { 
        name,
        image, 
        diets, 
        summary, 
        healthScore, 
        analyzedInstructions } = useSelector((state) => state.detail)

    useEffect(() => {   
        dispatch(getRecipesById(id))
    },[])

  return (
    <div>
        <p>{name}</p>
        <br/>
        <div>
          {diets.map(el => {
            return (
              <p>{el}</p>
            )
          })}
        </div>
        <br/>
        <span>{summary}</span>
        <br/>
        <p>{healthScore}</p>
        <br/>
        <img src={image} alt='altafoto' />
    </div>
  )
}

export default Detail
