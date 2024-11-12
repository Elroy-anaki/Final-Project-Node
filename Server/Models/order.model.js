const mongoose = require("mongoose");
const productModel = require("../models/product.model");

const productSchema = mongoose.Schema({
  productId: {
    ref: "Products",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const shipmentAddressSchema = mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
});
const orderSchema = mongoose.Schema(
  {
    userId: {
      ref: "Users",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
    },
    shipmentAddress: {
      type: shipmentAddressSchema,
      required: true,
    },
    products: {
      type: [productSchema],
      required: true,
    },
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

orderSchema.pre("save", async function (next) {
  // Calculate fucntion
  console.log("Calculate fucntion By prodectPrice in DB")
  const x = (
    await productModel.find({
      _id: { $in: this.products.map((product) => product.productId) },
    })
  )
  this.totalPrice  = x.reduce(
    (total, currentValue, index) =>
      total + currentValue.productPrice * this.products[index].quantity,
    0
  );
  next();
});

const orderModel = mongoose.model("Orders", orderSchema);

module.exports = orderModel;
