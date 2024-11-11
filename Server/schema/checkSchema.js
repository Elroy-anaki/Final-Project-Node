const productModel = require("../models/product.model");
const userModel = require("../models/user.model");

module.exports = {
  checkProductSchema: async (req, res, next) => {
    console.log("Check Schema...")
    try {
      const newProdcut = req.body;
      await productModel.validate(newProdcut);
      next();
    } catch (error) {
      res.json({ succes: false, mes: error.message });
    }
  },
  checkUserSchema: async (req, res, next) => {
    try {
      const newUser = req.body;
      newUser.userRole = "admin";
      await userModel.validate(newUser);
      next();
    } catch (error) {
      console.log(error.message)
      res.status(400).json({ succes: false, mes: error.message });
    }
  },
};
