import React, { useState } from 'react'
import './Navbar.css'
import { orderByAZ, orderByHS, searchByName } from '../../redux/actions/actions'
import { useDispatch } from 'react-redux'

const Navbar = () => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState('')

    const handleHS = (e) => {
      e.preventDefault()
      dispatch(orderByHS(e.target.value))
    }
 
    const handleAZ = (e) => {
      e.preventDefault()
      dispatch(orderByAZ(e.target.value))
    }

    const handleInput = (e) => {
      e.preventDefault()
      setSearch(e.target.value)
      dispatch(searchByName(search))
    }

    let arr = [ "vegetarian",
                "vegan",
                "glutenFree",
                "dairyFree",
                "veryHealthy",
                "cheap",
                "veryPopular",
                "sustainable",
                "lowFodmap" ]

    return (
      <div className='nav-container'>
        <select id='OrderBy-HS' onChange={handleHS}>
          <option value='' defaultValue={'Ordenar por Health Score'}>Ordenar por Health Score</option>
          <option value='mayor'>Mayor HS</option>
          <option value='menor'>Menor HS</option>
        </select>

        <select>  
            <option defaultValue={'filtrar por dieta'}>filtrar por dieta</option>
            { arr.map(diet => {
              return (
              <option>{diet}</option>
              )
            })}
        </select>

        <select id='OrderBy-AZ' onChange={handleAZ}>
          <option value='' defaultValue={'Ordenar por A-Z'}>Ordenar por A-Z</option>
          <option value='A-Z'>A-Z</option>
          <option value='Z-A'>Z-A</option>
        </select>
          <input 
          placeholder='buscar receta'
          value={search}
          onChange={handleInput}
          />
          <button>Buscar!</button>
      </div>
    )
}

export default Navbar
