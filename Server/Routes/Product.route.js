const express = require("express");
const {
  getAllProducts,
  getById,
  addProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/Product.controller");
const {checkProductSchema} = require('../schema/checkSchema')
const {verifyToken} = require('../middlewares/verifyToken') 
const route = express.Router();


// Endpoints
route.get("/getAllProducts", getAllProducts);

route.get("/getById/:id", getById);

route.post("/addProduct",verifyToken, checkProductSchema, addProduct);

route.put("/editProduct/:id",verifyToken, editProduct);

route.delete("/deleteProduct/:id",verifyToken, deleteProduct);

module.exports = route;
