// Imports
const cors = require('cors');
const env = require('dotenv');
env.config();
const express = require('express');
require("./DataBase/DB_CONFIG")();
const productModel = require('./Models/Product.model');
const productRoute = require('./Routes/Product.route')

// Define
const app = express();
const PORT = Number(process.env.PORT);

// Global middlewares
app.use(cors())
app.use(express.json());
app.use('/products', productRoute)








app.listen(PORT, () => console.log("Server run on", PORT));

