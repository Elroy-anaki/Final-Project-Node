const express = require("express");
const route = express.Router();

route.post("/createOrder", createOrder);

route.get("/getAllOrders", getAllOrders);

route.get("/getOrderById/:id", getOrderBiId);

route.put("/editOrder", editOrder);

route.delete("/deleteOrderById/:id", deleteOrderById);
