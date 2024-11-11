const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
      unique: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
    userRole:{
      type: String,
      enum:["user", "admin"],
      required: true
    },
    userAddress: {
      type: String,
      default: "",
    },
    verify: {
      type: Boolean,
      default: false,
    },
    forgotPasswordId: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
