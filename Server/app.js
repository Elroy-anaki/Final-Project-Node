// Imports
const cors = require('cors');
const env = require('dotenv');
env.config();
const express = require('express');
require("./DataBase/DB_CONFIG")();
const productRoute = require('./Routes/Product.route')
const {logger} = require('./middlewares/global.middlewares')
const cookieParser = require('cookie-parser')

// Define
const app = express();
const PORT = Number(process.env.PORT);

// Global middlewares
app.use(cors())
app.use(express.json());
app.use(cookieParser())
app.use(logger)
app.use('/products', productRoute)



app.listen(PORT, () => console.log("Server run on", PORT));

