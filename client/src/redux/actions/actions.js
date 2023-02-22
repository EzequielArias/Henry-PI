import axios from 'axios'
import { GET_ALL_RECIPES, GET_RECIPES_BY_NAME, ORDER_BY_HS,ORDER_BY_AZ, SEARCH_BY_NAME } from '../action-type'


export const getRecipes = () => {
     return async function(dispatch){
        try {
            let res = await axios.get('http://localhost:8080/recipes')

        return dispatch({
            type : GET_ALL_RECIPES,
            payload : res.data
        })

        } catch (error){
            throw new Error(error)
        }
    }
} 

export const getRecipesByName = (name) => {
    return async function(dispatch){
        let res = axios.get(`https://foodapi.fly.dev/recipes?name=${name}`)

        return dispatch({
            type : GET_RECIPES_BY_NAME,
            payload : res.data
        })
    }
}

export const orderByHS = (value) => {

    return async function(dispatch){

        return dispatch({
            type : ORDER_BY_HS,
            payload : value
        })
    }
}

export const orderByAZ = (value) => {

    return async function(dispatch){
        return dispatch({
            type : ORDER_BY_AZ,
            payload : value
        })
    }
}

export const searchByName = (name) => {
    return async function(dispatch){

        return dispatch({
            type : SEARCH_BY_NAME,
            payload : name
        })
    }
}