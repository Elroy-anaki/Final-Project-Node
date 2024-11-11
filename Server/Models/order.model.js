const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productId: {
    ref: "Products",
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  quantity: {
    type: number,
    required: true
  }
});

const shipmentAddressSchema = mongoose.Schema({
    city: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      }
})
const orderSchema = mongoose.Schema(
  {
    userId: {
      ref: "Users",
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    shipmentAddress: {
      type: shipmentAddressSchema,
      required: true,
    },
    products: {
        type: [productSchema],
        required: true,
        
    }
  },
  { timestamps: true }
);

const orderModel = mongoose.model("Orders", orderSchema);

module.exports = orderModel;