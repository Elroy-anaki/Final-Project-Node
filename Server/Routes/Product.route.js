const express = require("express");
const {
  getAllProducts,
  getById,
  addProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const {checkProductSchema} = require('../schema/checkSchema')
const {verifyToken} = require('../middlewares/verifyToken') 
const route = express.Router();


// Endpoints
route.get("/getAllProducts", getAllProducts);

route.get("/getById/:id", getById);

// ADD verifyToken,
route.post("/addProduct", checkProductSchema, addProduct);

// ADD verifyToken,
route.put("/editProduct/:id", editProduct);

// ADD verifyToken,
route.delete("/deleteProduct/:id", deleteProduct);

module.exports = route;
