const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    unique:true
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
const productModel = mongoose.model("Products", productSchema);

module.exports = productModel;
