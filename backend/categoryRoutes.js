const express = require('express');
const database = require('./connect.js');
const ObjectId = require('mongodb').ObjectId;

let categoryRoutes = express.Router();


//Retrieve all categories
categoryRoutes.route("/categories").get(async (request, response) => {
let db= database.getDb()
let data = await db.collection("categories").find({}).toArray()
if(data.length > 0){
    response.json(data)
}else{
    throw new Error("No categories found")
}
});

//Retrieve one category by id
categoryRoutes.route("/categories/:id").get(async (request, response) => {
    let db= database.getDb()
    let data = await db.collection("categories").findOne({_id: new ObjectId(request.params.id)})
    if(Object.keys(data).length > 0){
        response.json(data)
    }else{
        throw new Error("No category found")
    }
    });

    module.exports = categoryRoutes