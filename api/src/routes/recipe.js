const express = require("express")
const router = express.Router();

const { getRecipes, getRecipeDetail, createRecipe } = require('../controllers/recipe')
const { validateCreate } = require('../validation/recipe')

router.get('/', getRecipes)

router.get('/:id',getRecipeDetail)

router.post('/recipes',validateCreate,createRecipe)

module.exports = router;