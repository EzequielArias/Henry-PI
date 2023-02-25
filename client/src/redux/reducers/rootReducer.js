import React from "react";
import {
  GET_ALL_RECIPES,
  GET_RECIPE_BY_ID,
  ORDER_BY_AZ,
  ORDER_BY_HS,
  SEARCH_BY_NAME,
  CREATE_RECIPE
} from "../action-type/index";

const initialState = {
  recipes: [],
  recipesFilter : [],
  inputSearch : false,
  detail : {}
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: (state.recipes = payload),
      };
    case ORDER_BY_HS:
      let allRecipes = [...state.recipesFilter.length > 0 ? state.recipesFilter : state.recipes];
      let aux;
      if (payload === "menor") {
        aux = allRecipes.sort((a, b) => a.healthScore - b.healthScore);
      } else if (payload === "mayor") {
        aux = allRecipes.sort((a, b) => b.healthScore - a.healthScore);
      }
      if (!payload) return state;
      
      if(state.recipesFilter.length > 0) {
        return {
          ...state,
          recipesFilter: aux,
        };
      }

      return {
        ...state,
        recipes: aux,
      };

    case ORDER_BY_AZ:
      let recipes = [...state.recipesFilter.length > 0 ? state.recipesFilter : state.recipes];
      let help;
      if (payload === "A-Z") {
        help = recipes.sort(function (a, b) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      }
      if (!payload) return state;
      if (payload === "Z-A") {
        help = recipes.sort(function (a, b) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
        help.reverse();
      }

      if(state.recipesFilter.length > 0) {
        return {
          ...state,
          recipesFilter: help,
        };
      }

      return {
        ...state,
        recipes: help,
      };
   
    case SEARCH_BY_NAME:
    
    let data = [...state.recipes]
    let result = data.filter((el) => {
      if(el.name.toLowerCase().includes(payload.toLowerCase()))
      return el
    }) 

    if(!result) return {...state,inputSearch : false}

    return {
      ...state,
      recipesFilter : result,
      inputSearch : true
    }

    case GET_RECIPE_BY_ID: 
     return {
        ...state,
        detail : payload
      }
    case CREATE_RECIPE:
      console.log(payload)
      return
      
    default:
      return state;
  }
};

export default rootReducer;
