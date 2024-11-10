const userModel = require("../models/user.model");

module.exports = {
  isUserVerifyOrExist: async (req, res, next) => {
    try {
      const { userEmail } = req.body;
      const user = await userModel.findOne({ userEmail });
      console.log(user)
      if (!user) throw "The user doesn't exist!";
      if (!user.verify) throw "Please verify your email";

      req.user = user;
      next();
    } catch (error) {
      res.status(400).json({ succses: false, msg: error });
    }
  },
};
