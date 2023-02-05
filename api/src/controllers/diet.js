const { v4 } = require('uuid');
const { Diet } = require('../db.js')
const axios = require('axios')
const key = process.env.API_KEY

const getDiet = async (req, res) => {

    try {

    let diets = await Diet.findAll()
    
    if(!diets.length){
        let defaultDiets = ["Primal", 
        "Low FODMAP", "Whole30", "Paleo",
         "Pescetarian", "Vegan", "Ovo-Vegetarian", "Lacto-Vegetarian", "Ketogenic", "Vegeterian", "Gluten Free"]
        
         for (let i = 0; i < defaultDiets.length; i++) {
            await Diet.create({
                id : v4(),
                name : defaultDiets[i]
            })            
         }

         diets = await Diet.findAll()

        }

        res.status(200).send(diets)

    } catch (error) {

        throw new Error(error)

    }

}

const createDiet = async (req, res) => {

    let { name } = req.body;

    try {

       await Diet.create({
            id : v4(),
            name : name
        })
        
        res.status(200).send("Tipo de dieta agregado correctamente")

    } catch (err) {

        throw new Error(err)

    }
}

module.exports = { createDiet, getDiet }