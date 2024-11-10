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

    }
    // verifyForGotPassword:
  },
  { timestamps: true }
);

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
