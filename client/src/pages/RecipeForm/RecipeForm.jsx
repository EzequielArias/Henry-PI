import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createRecipes } from '../../redux/actions/actions'

const RecipeForm = () => {
    let dispatch = useDispatch()
    const [ data , setData ] = useState({
        name : '',
        image : '', 
        diets : [], 
        summary : '', 
        healthScore : 1, 
        analyzedInstructions : []
    })

    const handleForm = (e) => {
      e.preventDefault()
        if(e.target.name === 'options'){
          setData((current) => {
            return {
              ...current,
              diets : data.diets.includes(e.target.value) ? [...data.diets] : [...data.diets, e.target.value]
            }
          })
        }else if(e.target.name === 'analyzedInstructions'){
          setData((current) => {
            return {
              ...current,
              analyzedInstructions : data.analyzedInstructions.length < 10 
              ? [ ...data.analyzedInstructions, e.target.value ]
              : [...data.analyzedInstructions]
            }
          })
        }else{
          console.log(e.target.name)
          console.log(e.target.value)
          setData((current) => {
            return {
              ...current,
              [e.target.name] : e.target.value
            }
          })
        }
    }
 
    const handleSend = () => {
      try {
         dispatch(createRecipes(data))
      } catch (error) {
        console.log(error)
      }
    } 
    
    const handleText = (e) => {
      if(data.analyzedInstructions.length < 10){
        setData((current) => {
          return {
            ...current,
            analyzedInstructions : [...data.analyzedInstructions, e.target.value]
          }
        })
      }
    }

  return (
    <div>
       <form>
         <input name='name' type='text' onChange={handleForm}/>
         <input name='summary' type='text' onChange={handleForm}/>
         <input name='image' type='text' onChange={handleForm}/>
         <input name='healthScore' type='number' onChange={handleForm}/>

         <select onChange={handleForm} name='options'>
           <option value='vegetariano'>Vegetariano</option>
           <option value='celiaco'>Celiaco</option>
         </select>
         
         <input name='analyzedInstructions' type='text' id='steps' onClick={handleText}/>
         <label htmlFor='steps' >enviar textarea</label>

        <button type='button' onClick={handleSend}>Enviar</button>
      </form>
    </div>
  )
}

export default RecipeForm
