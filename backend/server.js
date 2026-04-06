const connect = require('./connect.js');
const express = require('express');
const cors = require('cors');
const recipes = require('./recipeRoutes.js');
const categories = require('./categoryRoutes.js');
const ingredients = require('./ingredientRoutes.js');
const diets = require('./dietRoutes.js');


const app = express()
const PORT = 3000;

app.use(cors())
app.use(express.json())
app.use(recipes)
app.use(categories)
app.use(ingredients)
app.use(diets)

async function startServer() {
    try {
        await connect.connectToServer(); // wait for DB

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (err) {
        console.error("Failed to start server:", err);
    }
}

startServer();

