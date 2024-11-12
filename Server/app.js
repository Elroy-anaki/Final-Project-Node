// Imports
require("dotenv").config();
require("./config/db.config")();

const express = require("express");
const cors = require("cors");
const { logger } = require("./middlewares/global.middlewares");
const cookieParser = require("cookie-parser");
const productRoutes = require("./routes/Product.route");
const orderRoutes = require("./routes/order.route");
const userRoutes = require("./routes/user.route");

// Define Variables for the program
const app = express();
const PORT = Number(process.env.PORT) || 5000;

// Global middlewares
app.use(
  cors({
    credentials: true,
    optionsSuccessStatus: 200,
    origin: ["http://127.0.0.1:5500"],
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(logger);

// Use Routes
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes)

app.listen(PORT, () => console.log("Server run on", PORT));
