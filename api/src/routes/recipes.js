const express = require("express")
const router = express.Router();

const { getRecipeDetail, createRecipe, getRecipeByName} = require('../controllers/recipe')
const { validateCreate } = require('../validation/recipe')

router.get('/', getRecipeByName)

router.get('/:id',getRecipeDetail)

router.post('/',createRecipe)

module.exports = router;