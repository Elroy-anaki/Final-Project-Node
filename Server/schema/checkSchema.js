const productModel = require("../models/product.model");
const userModel = require("../models/user.model");

module.exports = {
  checkProductSchema: async (req, res, next) => {
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
      await userModel.validate(newUser);
      next();
    } catch (error) {
      res.json({ succes: false, mes: error.message });
    }
  },
};
