const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
  },
});

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;
