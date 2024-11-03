const express = require("express");
const productModel = require("../Models/Product.model");
const {
  getAllProducts,
  getById,
  addProduct,
  editProduct,
  deleteProduct,
} = require("../Controller/Product.controller");

const route = express.Router();

// TODO add a midllewares

// Endpoints
route.get("/getAllProducts", getAllProducts);

route.get("/getById/:id", getById);

route.post("/addProduct", addProduct);

route.put("/editProduct", editProduct);

route.delete("/deleteProduct/:id", deleteProduct);

module.exports = route;
