// Imports
const cors = require('cors');
const env = require('dotenv');
env.config();
const express = require('express');
require("./dataBase/DB_CONFIG")();
const productRoute = require('./routes/Product.route')
const userRoute = require('./routes/user.route')
const {logger} = require('./middlewares/global.middlewares')
const cookieParser = require('cookie-parser')

// Define Variables for the program
const app = express();
const PORT = Number(process.env.PORT);

// Global middlewares
app.use(cors())
app.use(express.json());
app.use(cookieParser())
app.use(logger)

// Use Routes
app.use('/products', productRoute)
app.use('/users',  userRoute)



app.listen(PORT, () => console.log("Server run on", PORT));

