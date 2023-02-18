import React from 'react'
import { GET_ALL_RECIPES } from '../action-type/index'

const initialState = {
  recipes : []
}

const rootReducer = (state = initialState, {type, payload}) => {

  switch (type) {
    case GET_ALL_RECIPES:
        return {
          ...state,
          recipes : state.recipes = payload
        }
    default:
      return state
        
  }
}

export default rootReducer
