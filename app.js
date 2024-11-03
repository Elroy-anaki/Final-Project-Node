// Imports
const env = require('dotenv');
env.config();
const express = require('express');
const connectDB = require("./DataBase/DB_CONFIG")();
const productModel = require('./Models/Product.model');

// Define
const app = express();
const PORT = Number(process.env.PORT);


app.listen(PORT, () => console.log("Server run on", PORT));

