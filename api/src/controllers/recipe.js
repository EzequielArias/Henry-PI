const axios = require("axios")
require('dotenv').config()
const { Recipe } = require('../db.js')
let key = process.env.API_KEY

const getRecipes =  async (req, res) => {

    let { query } = req.query;
    try {

        let result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${query}`)

        result.data.results.length === 0 
        ? res.status(404).send("No se encontraron recetas con eso")
        : res.status(200).send(result.data)    
        
    } catch(err){
        throw new Error(err)
    }
}

const getRecipeDetail = async (req, res) => {
    let { id } = req.params;

    try {
        let result = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`)
        res.status(200).send(result.data)

    } catch (err) {
        throw new Error(err)
    }
}

const createRecipe = async (req, res) => {
    try {
        let {
            name,
            shortDescription,
            healthScore,
            formula 
            } = req.body;

        await Recipe.create({
            name,
            shortDescription,
            healthScore,
            formula
        })

        res.status(200).send("La receta se guardo con exito")
    } catch (err) {
        throw new Error(err)
    }
}

module.exports = { getRecipes, getRecipeDetail, createRecipe }