const express = require("express");
const userModel = require("../models/user.model");
const { signUp, signIn, verifyEmail } = require("../controllers/user.controller");
const {checkUserSchema} = require('../schema/checkSchema')

const route = express.Router();

route.post("/signUp", checkUserSchema, signUp);

route.post("/signIn", signIn);

route.get("/emailVerifications/:id", verifyEmail)
route.get("/r", (req, res) => {
    res.clearCookie("token");
    res.json("remove Token")
})


module.exports = route;
