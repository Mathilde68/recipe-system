const express = require('express');
const database = require('./connect.js');
const ObjectId = require('mongodb').ObjectId;
const errorHandler = require('./errorHandler'); 

let ingredientRoutes = express.Router();


//Retrieve all ingredients
ingredientRoutes.route("/ingredients").get(async (request, response, next) => {
    try {
        let db = database.getDb()
        let data = await db.collection("ingredient_tags").find({}).toArray()
        if (data.length > 0) {
            response.json(data)
        } else {
            response.status(404).json({ message: "No ingredients found" });
        }

    } catch (error) {
        next(error)

    }
});



ingredientRoutes.use(errorHandler);

module.exports = ingredientRoutes