const express = require("express");
const userModel = require("../models/user.model");
const { signUp, signIn, verifyEmail, forgotPassword, resetPassword } = require("../controllers/user.controller");
const {checkUserSchema} = require('../schema/checkSchema')

const route = express.Router();

route.post("/signUp", checkUserSchema, signUp);

route.post("/signIn", signIn);

route.get("/emailVerifications/:id", verifyEmail)
route.post("/forgotPassword/", forgotPassword)
route.post("/resetPassword/:id", resetPassword)
route.get("/r", (req, res) => {
    res.clearCookie("token");
    res.json("remove Token")
})


module.exports = route;
