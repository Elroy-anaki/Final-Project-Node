const userModel = require("../models/user.model");
const { compare } = require("bcrypt");
const bcrypt = require("bcrypt");
const { createToken } = require("../service/token.service");
const transporter = require("../service/nodeMailer.service");

module.exports = {
  signUp: async (req, res) => {
    console.log(req.body);
    // Get the user's details
    const user = req.body;
    // Generate the password
    const hashPassword = await bcrypt.hash(user.userPassword, 10);
    user.userPassword = hashPassword;
    // Save in the DB
    try {
      const newUser = await userModel.create(user);
      transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to: newUser.userEmail,
        subject: "Open",
        text: "I Love You",
        html: `<h1>Hello${user.userName}</h1>
        <span>Please click here and verify your account</span><a href="http://localhost:3000/users/emailVerifications/${newUser._id}>Verify </a>"`,
      });
      res.status(201).json({ succses: true, msg: "added new user", newUser });
    } catch (error) {
      res.status(400).json({ succses: false, msg: error });
    }
  },
  signIn: async (req, res) => {
    try {
      console.log(req.body);
      // Get the email + password
      const { userEmail, userPassword } = req.body;

      // if(!userEmail || !userPassword){

      // }

      // Find the user with email + check if exist?!
      const user = await userModel.findOne({ userEmail });
      if (!user) throw "The user doesn't exist!";

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
      res.status(200).send("You verify your email! Welcome");
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
