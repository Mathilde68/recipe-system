const express = require('express');
const database = require('./connect.js');
const ObjectId = require('mongodb').ObjectId;

let recipeRoutes = express.Router();


//Retrieve all recipes
recipeRoutes.route("/recipes").get(async (request, response) => {
let db= database.getDb()
let data = await db.collection("recipes").find({}).toArray()
if(data.length > 0){
    response.json(data)
}else{
    throw new Error("No recipes found")
}
});

//Retrieve one recipe by id
recipeRoutes.route("/recipes/:id").get(async (request, response) => {
    let db= database.getDb()
    let data = await db.collection("recipes").findOne({_id: new ObjectId(request.params.id)})
    if(Object.keys(data).length > 0){
        response.json(data)
    }else{
        throw new Error("No recipes found")
    }
    });

    module.exports = recipeRoutes