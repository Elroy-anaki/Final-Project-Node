const userModel = require("../models/user.model");
const { compare } = require("bcrypt");
const {createToken} = require('../service/token.service')

module.exports = {
  signUp: async (req, res) => {
    // Get the user's details
    const user = req.body;
    // Generate the password
    const hashPassword = bcrypt.hashSync(user.userPassword, 10);
    user.userPassword = hashPassword;
    // Save in the DB
    try {
      const newUser = await userModel.create(user);
      res.status(201).json({ succses: true, msg: "added new user", newUser });
    } catch (error) {
      res.status(400).json({ succses: false, msg: error });
    }
  },
  signIn: async (req, res) => {
    try {
      // Get the email + password
      const { userEmail, userPassword } = req.body;

      if(!userEmail || !userPassword){
        
      }

      // Find the user with email + check if exist?!
      const user = await userModel.findOne({ userEmail });
      if (!user) throw "The user doesn't exist!";

      // Compare the input password with the current password in DB
      const isCurrectPassword = await compare(userPassword, user.userPassword);
      console.log("TTT", isCurrectPassword);
      if (!isCurrectPassword) throw "The password isn't currect!";

      // Create a token 
      const token = await createToken(user);
      console.log("FFFF", token)
      res.cookie("token", token)

      res.json({ succses: true, msg: "Enter in system",token });
    } catch (error) {
      res.status(401).json({ succses: false, msg: error });
    }
  },
};
