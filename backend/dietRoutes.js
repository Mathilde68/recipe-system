const express = require('express');
const database = require('./connect.js');
const ObjectId = require('mongodb').ObjectId;
const errorHandler = require('./errorHandler'); 
let dietRoutes = express.Router();


//Retrieve all diets
dietRoutes.route("/diets").get(async (request, response,next) => {

    try {
        let db = database.getDb()
        let data = await db.collection("diet_tags").find({}).toArray()
        if (data.length > 0) {
            response.json(data)
        } else {
            response.status(404).json({ message: "No diets found" });
        }
    } catch (error) {
        next(error)
    }

});


dietRoutes.use(errorHandler);

module.exports = dietRoutes