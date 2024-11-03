const express = require("express");
const {
  getAllProducts,
  getById,
  addProduct,
  editProduct,
  deleteProduct,
} = require("../Controller/Product.controller");
const {checkSchema} = require('../middlewares/PUT+POST.middleware')
const route = express.Router();

// TODO add a midllewares

// Endpoints
route.get("/getAllProducts", getAllProducts);

route.get("/getById/:id", getById);

route.post("/addProduct",checkSchema, addProduct);

// TODO if I need to pass all product all time for the schema? (ASK EYAL!!)
route.put("/editProduct",checkSchema, editProduct);

route.delete("/deleteProduct/:id", deleteProduct);

module.exports = route;
