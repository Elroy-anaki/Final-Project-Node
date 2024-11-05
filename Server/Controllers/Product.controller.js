const productModel = require("../models/product.model");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const allProducts = await productModel.find();
      res.json({
        success: true,
        message: "Take",
        allProducts,
      });
    } catch (error) {
      res.json({
        success: false,
        message: "NOT Take!!!",
        error,
      });
    }
  },
  getById: async (req, res) => {
    try {
      const product = await productModel.findById(req.params.id);
      res.json({ success: true, mes: "", product });
    } catch (error) {
      res.json({ success: false, mes: "", error });
    }
  },
  addProduct: async (req, res) => {
    const newProdcut = req.body;
    console.log(newProdcut);
    try {
      const product = await productModel.create(newProdcut);
      res.status(200).json({
        success: true,
        message: "added product!",
        product,
      });
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "NOT added product!",
        error,
      });
    }
  },
  editProduct: async (req, res) => {
    try {
      const id = req.params.id;
      const productAfterEdit = await productModel.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
      res.json({ succes: false, mes: "edited", productAfterEdit });
    } catch (error) {
      res.json({ succes: false, mes: error });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const deletedProduct = await productModel.findByIdAndDelete(
        req.params.id
      );
      const allProducts = await productModel.find();
      res.status(200).json(allProducts);
    } catch (error) {}
  },
};
