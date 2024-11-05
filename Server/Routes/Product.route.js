const express = require("express");
const {
  getAllProducts,
  getById,
  addProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const {checkProductSchema} = require('../schema/checkSchema')
const route = express.Router();


// Endpoints
route.get("/getAllProducts", getAllProducts);

route.get("/getById/:id", getById);

route.post("/addProduct",checkProductSchema, addProduct);

route.put("/editProduct/:id", editProduct);

route.delete("/deleteProduct/:id", deleteProduct);

module.exports = route;
