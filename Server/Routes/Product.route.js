const express = require("express");
const {
  getAllProducts,
  getById,
  addProduct,
  editProduct,
  deleteProduct,
} = require("../Controllers/Product.controller");
const {checkSchema} = require('../schema/product.schema')
const route = express.Router();


// Endpoints
route.get("/getAllProducts", getAllProducts);

route.get("/getById/:id", getById);

route.post("/addProduct",checkSchema, addProduct);

route.put("/editProduct/:id", editProduct);

route.delete("/deleteProduct/:id", deleteProduct);

module.exports = route;
