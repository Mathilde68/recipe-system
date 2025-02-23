const express = require('express');
const database = require('./connect.js');
const ObjectId = require('mongodb').ObjectId;
const errorHandler = require('./errorHandler'); 
let recipeRoutes = express.Router();


//Retrieve all recipes
recipeRoutes.route("/recipes").get(async (request, response, next) => {

    try {
        let db = database.getDb()
        let data = await db.collection("recipes").find({}).toArray()
        if (data.length > 0) {
            response.json(data)
        } else {
            response.status(404).json({ message: "No recipes found" });
        }
    } catch (error) {
        next(error)
    }
});

//Retrieve one recipe by id
recipeRoutes.route("/recipes/:id").get(async (request, response, next) => {
    try {
        const id = request.params.id;


        let db = database.getDb();
        let data = await db.collection("recipes").findOne({ _id: new ObjectId(id) });


        if (!data) {
            return response.status(404).json({ message: "Recipe not found" });
        }
        response.json(data);
    } catch (error) {
        next(error);
    }
});


recipeRoutes.use(errorHandler);


module.exports = recipeRoutes