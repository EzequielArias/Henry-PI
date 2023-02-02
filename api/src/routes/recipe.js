const express = require("express")
const router = express.Router();

const { getRecipes, getRecipeDetail, createRecipe } = require('../controllers/recipe')

router.get('/', getRecipes)

router.get('/:id',getRecipeDetail)

router.post('/recipes', createRecipe)

module.exports = router;