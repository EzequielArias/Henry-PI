import {
  GET_ALL_RECIPES,
  ORDER_BY_HS,
  ORDER_BY_AZ,
  SEARCH_BY_NAME,
  GET_RECIPE_BY_ID,
  CREATE_RECIPE
} from "../action-type";

import axios from 'axios'

export const getRecipes = () => {
  return async function (dispatch) {
    try {
      let res = await axios.get("http://localhost:8080/recipes");

      return dispatch({
        type: GET_ALL_RECIPES,
        payload: res.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const getRecipesById = (id) => {
    return async function(dispatch) {
        try {

            let res = await axios.get(`http://localhost:8080/recipes/${id}`)
            return dispatch({
                type :  GET_RECIPE_BY_ID,
                payload : res.data[0]
            })

        } catch (error) {
            console.log(error.message)
        }
    }
}

export const orderByHS = (value) => {
  return async function (dispatch) {
    return dispatch({
      type: ORDER_BY_HS,
      payload: value,
    });
  };
};

export const orderByAZ = (value) => {
  return async function (dispatch) {
    return dispatch({
      type: ORDER_BY_AZ,
      payload: value,
    });
  };
};

export const searchByName = (name) => {
  return async function (dispatch) {
    return dispatch({
      type: SEARCH_BY_NAME,
      payload: name,
    });
  };
};

export const createRecipes = (data) => {
  return async function(dispatch){
    try {
      let res = await axios.post(`http://localhost:8080/recipes`, data)  
      return dispatch({
        type : CREATE_RECIPE,
        payload : res.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
