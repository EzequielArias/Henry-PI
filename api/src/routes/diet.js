const express = require("express")
const router = express.Router();

const { createDiet, getDiet} = require('../controllers/diet.js')

router.get('/', getDiet)

router.post('/', createDiet )

module.exports = router;