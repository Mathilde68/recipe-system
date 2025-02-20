const express = require('express');
const database = require('./connect.js');
const ObjectId = require('mongodb').ObjectId;

let ingredientRoutes = express.Router();


//Retrieve all ingredients
ingredientRoutes.route("/ingredients").get(async (request, response) => {
let db= database.getDb()
let data = await db.collection("ingredient_tags").find({}).toArray()
if(data.length > 0){
    response.json(data)
}else{
    throw new Error("No ingredients found")
}
});

//Retrieve one ingredient by id
ingredientRoutes.route("/ingredients/:id").get(async (request, response) => {
    let db= database.getDb()
    let data = await db.collection("ingredient_tags").findOne({_id: new ObjectId(request.params.id)})
    if(Object.keys(data).length > 0){
        response.json(data)
    }else{
        throw new Error("No ingredient found")
    }
    });

    module.exports = ingredientRoutes