const express = require('express');
const database = require('./connect.js');
const ObjectId = require('mongodb').ObjectId;

let dietRoutes = express.Router();


//Retrieve all diets
dietRoutes.route("/diets").get(async (request, response) => {
let db= database.getDb()
let data = await db.collection("diet_tags").find({}).toArray()
if(data.length > 0){
    response.json(data)
}else{
    throw new Error("No diets found")
}
});

//Retrieve one diet by id
dietRoutes.route("/diets/:id").get(async (request, response) => {
    let db= database.getDb()
    let data = await db.collection("diet_tags").findOne({_id: new ObjectId(request.params.id)})
    if(Object.keys(data).length > 0){
        response.json(data)
    }else{
        throw new Error("No diet found")
    }
    });

    module.exports = dietRoutes