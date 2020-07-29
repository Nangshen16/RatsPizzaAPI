const express = require ('express')
const PizzaRouter = express.Router()
const {index, create ,update,destroy} = require('../controllers/Pizza.js')

//Routes!
//get all pizzas
PizzaRouter.get("/",index);

//create a new pizza
PizzaRouter.post("/", create);

//put
PizzaRouter.put("/:id",update)

//updating a pizza
PizzaRouter.post("/:id", update)
//destroy a pizza
PizzaRouter.delete("/:id", destroy)
module.exports = PizzaRouter