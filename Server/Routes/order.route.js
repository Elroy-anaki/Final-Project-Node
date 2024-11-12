const express = require("express");
const route = express.Router();
const {createOrder, getOrderById, deleteOrderById} = require('../controllers/order.contoller');

route.post("/createOrder", createOrder);

// route.get("/getAllOrders", getAllOrders);

route.get("/getOrderById/:id", getOrderById);

// route.put("/editOrder", editOrder);

route.delete("/deleteOrderById/:id", deleteOrderById);


module.exports = route;