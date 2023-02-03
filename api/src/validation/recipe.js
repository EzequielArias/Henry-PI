const { check } = require("express-validator")
const validateResult = require('../utils/validateFields.js')

let validateCreate = [
    /*check("name")
    .isString()
    .exists()
    .isEmpty()
    .isLength({max : 20}),

    check("shortDescription")
    .isString()
    .exists()
    .isEmpty()
    .isLength({min : 10, max : 200}),

    check("healthScore")
    .isNumeric({no_symbols : true})
    .exists()
    .isEmpty()
    .custom((healthScore, {req}) => {
        if(healthScore > 10 || healthScore < 1){
            throw new Error("El healthScore solo pueden ser numeros del 1 al 10")
        }else{
            return true
        }
    }),
    
    check("formula")
    .exists()
    .isEmpty()
    .isString()
    .isLength({min : 20 , max : 300}),
*/
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreate }