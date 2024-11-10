const {nanoid} = require('nanoid')
const userModel = require("../models/user.model");
const { compare } = require("bcrypt");
const bcrypt = require("bcrypt");
const { createToken } = require("../service/token.service");
const transporter = require("../service/nodeMailer.service");

module.exports = {
  signUp: async (req, res) => {
    
    try {
      // Get the user's details
      const user = req.body;
      // Generate the password
      const hashPassword = await bcrypt.hash(user.userPassword, 10);
      user.userPassword = hashPassword;
      // Save in the DB

      const newUser = await userModel.create(user);

      transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to: newUser.userEmail,
        subject: "Open",
        text: "I Love You",
        html: `<h1>Hello ${user.userName}</h1>
         <p>Please click the button below to verify your account:</p>
         <a href="http://127.0.0.1:5500/Client/verifyEmail/verifyEmail.html?userId=${newUser._id}">
           Verify Account
         </a>`,
      });
      res.status(201).json({ succses: true, msg: "added new user", newUser });
    } catch (error) {
      res.status(500).json({ succses: false, msg: error.message });
    }
  },
  signIn: async (req, res) => {
    try {
      const { userPassword } = req.body;
      const user  = req.user;

      // Compare the input password with the current password in DB
      const isCurrectPassword = await compare(userPassword, user.userPassword);
      if (!isCurrectPassword) throw "The password isn't currect!";

      // Create a token
      const token = await createToken(user);
      res.cookie("token", token, {
        secure: true,
        httpOnly: true,
        sameSite: "none",
        path: "/",
        maxAge: 1000 * 60 * 30 * 1,
      });

      res.json({ succses: true, msg: "Enter in system", token });
    } catch (error) {
      res.status(401).json({ succses: false, msg: error });
    }
  },
  verifyEmail: async (req, res) => {
    try {
      const userId = req.params.id;
      await userModel.findByIdAndUpdate(userId, { verify: true });
      res.status(200).json({ mes: "You verify your email! Welcome!!!" });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  forgotPassword: async (req, res) => {
    const { userEmail } = req.body;
    const user = await userModel.findOne({ userEmail });
    user.forgotPasswordId = nanoid();
    user.save();
    transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: user.userEmail,
      subject: "Reset Password",
      html: `<h1>Hello ${user.userName}</h1>
         <p>Please click the button below to reset your password:</p>
         <a href="http://127.0.0.1:5500/Client/forgotPassword/forgotPassword.html?userId=${user._id}&forgotPasswordId=${user.forgotPasswordId}">
           Reset Password
         </a>`,
    });
  },
  resetPassword: async (req, res) => {
    try {

    const {userId, forgotPasswordId } = req.body;
    console.log(req.body)
    const newPassword = req.body.newPassword;
      const user = await userModel.findById(userId);
      if(user.forgotPasswordId !== forgotPasswordId) throw "Is not you!!!"
      const hashPassword = await bcrypt.hash(newPassword, 10);
      user.userPassword = hashPassword;
      user.forgotPasswordId = undefined;
      await user.save();
      res
        .status(200)
        .json({ succses: true, mes: "The Password changed succesfully!" });
    } catch (error) {
      res
        .status(500)
        .json({ succses: false, mes: error });
    }
  },
  logOut: (req, res) => {
    res.clearCookie("token", {
      secure: true,
      httpOnly: true,
      sameSite: "none",
      path: "/",
    });
    res.json("remove Token");
  }
};
