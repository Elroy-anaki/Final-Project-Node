const express = require("express");
const userModel = require("../models/user.model");
const {isUserVerifyOrExist} = require('../middlewares/user.middleware')

const { signUp, signIn, verifyEmail, forgotPassword, resetPassword, logOut } = require("../controllers/user.controller");
const {checkUserSchema} = require('../schema/checkSchema')

const route = express.Router();

route.post("/signUp", checkUserSchema, signUp);

route.post("/signIn",isUserVerifyOrExist, signIn);

route.get("/emailVerifications/:id", verifyEmail);

route.post("/forgotPassword/",isUserVerifyOrExist, forgotPassword);

route.post("/resetPassword/:id", resetPassword)

route.get("/logOut", logOut)


module.exports = route;
