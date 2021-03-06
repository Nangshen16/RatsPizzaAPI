const Rat = require("../models/Rat.js")
const Pizza = require("../models/Pizza.js")

//Index get all the rats with theirpizza

const index = async (req, res) => {
    try {
        //get array rats with pizza ids
 const allRats = await Rat.find({})
 console.log(allRats)

 //create a new  array of rats with the pizza info
 const rats = allRats.map(async (rat) => {
     const thePizza = await Pizza.findById(rat.pizza);
     console.log(thePizza);

     return {
         _id: rat._id,
         name: rat.name,
         Pizza: thePizza
     };
 });
 console.log(rats);
 const rats2 = await Promise.all(rats);
 await res.status(200).json(rats2);

 //res.status(200).json(rats)
    }
    catch(error) {
        res.status(400).send(error)
    }
}

const create = async(req,res) =>{
    try{
        const newRat = await Rat.create(req.body);
        res.status(200).json(newRat);
    }
    catch(error) {
        res.status(400).send(error)
    }

}
const update = async (req,res) => {
    try {
        const updatedRat = await Rat.findByIdAndUpdate
        (req.params.id, req.body,{new: true})
        res.status(200).json(updatedRat)

    }
    catch(error){
        res.status(400).send(error)
    }
}

const destroy = async (req,res) => {
    try {
        const deleteRat = await Rat.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedRat)
    }
    catch(error){
        res.status(400).send(error)
    }
}
module.exports = {
    index,
    create,
    update,
    destroy
}
    
