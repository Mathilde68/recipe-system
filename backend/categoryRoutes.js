const express = require('express');
const database = require('./connect.js');
const ObjectId = require('mongodb').ObjectId;
const errorHandler = require('./errorHandler');

let categoryRoutes = express.Router();


//Retrieve all categories
categoryRoutes.route("/categories").get(async (request, response, next) => {

    try {
        let db = database.getDb()
        let data = await db.collection("categories").find({}).toArray()
        if (data.length > 0) {
            response.json(data)
        } else {
            response.status(404).json({ message: "No categories found" })
        }
    } catch (error) {
        next(error)
    }
   
});

categoryRoutes.use(errorHandler);


module.exports = categoryRoutes