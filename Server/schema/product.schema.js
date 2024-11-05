const productModel = require("../models/Product.model");

module.exports = {
  checkSchema: async (req, res, next) => {
    try {
      const newProdcut = req.body;
      await productModel.validate(newProdcut);
      next();
    } catch (error) {
      res.json({ succes: false, mes: error.message });
    }
  },
};
