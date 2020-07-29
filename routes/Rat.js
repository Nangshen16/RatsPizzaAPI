const express = require ("express")
const RatRouter = express.Router()
const {index, create, update, destroy} = require ("../controllers/Rat.js")

//get all rats
RatRouter.get("/",index)

//create new rats
RatRouter.post("/",create)

//update a rat
RatRouter.put("/:id",update)

//Destroy//Destroy a Rat
RatRouter.delete("/:id", destroy)

module.exports = RatRouter