const axios = require("axios")
require('dotenv').config()
const { Recipe, Diet } = require('../db.js')
const { v4 } = require('uuid')
let key = process.env.API_KEY
let fakeApi = require('../../test.js')

const getRecipes =  async (req, res) => {
    //let Api_Result = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&number=100&addRecipeInformation=true`)
        let cleanData = fakeApi.results.map(el => {
            return {
            id : el.id,
            title : el.title,
            name : el.title,
            summary : el.summary,
            healthScore : el.healthScore,
            diets : el.diets,
            analyzedInstructions : el.analyzedInstructions,
            image : el.image
            }
        })

    let Db_result = await Recipe.findAll({
        include : [{
            model: Diet,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }]
    })

    let data = [ ...Db_result,...cleanData]
    return data
}

const getRecipeDetail = async (req, res) => {
    let { id } = req.params;
    let data = await getRecipes()

    try {
        let filtered = data.filter(item => item.id === String(id) || item.id == Number(id))
        filtered.length ? res.status(200).json(filtered) : res.status(404).send('Recipe not found')
    } catch (err) {
        throw new Error(err)
    }
    
}

const createRecipe = async (req, res) => {
    try {
        let {
            name,
            summary,
            healthScore,
            analyzedInstructions,
            dietArr
            } = req.body;

        await Recipe.create({
            id : v4(),
            name,
            summary,
            healthScore,
            analyzedInstructions,
            diets : [{id : v4(), name : dietArr}]
        },{
            include : "diets"
        })

        
        res.status(200).send("La receta se guardo con exito")
    } catch (err) {
        throw new Error(err)
    }
}

const getRecipeByName = async (req, res) => {
    let { name } = req.query;

    let data = await getRecipes()

    if(!name) return res.status(200).json(data)

    try {
        let searchIt = data.filter(el => 
        el.name.toLowerCase().includes(name.toLowerCase()))
        
        searchIt.length > 0 ? res.status(200).json(searchIt) : res.status(404).send("No se encontro la receta")

    } catch (err) {

        throw new Error(err)

    }
}

module.exports = { getRecipes, getRecipeDetail, createRecipe, getRecipeByName }