const productModel = require("../models/product.model");
const cloudinary = require("../config/cloudinary.config");

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
      res.status(200).json({ success: true, product });
    } catch (error) {
      res.status(500).json({ success: false, msg: error });
    }
  },
  addProduct: async (req, res) => {
    if (req.file) {
      const details = await cloudinary.uploader.upload(req.file.path);
      req.body.productImage = details.secure_url;
    }

    const newProdcut = req.body;
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
      await productModel.findByIdAndDelete(req.params.id);
      const allProducts = await productModel.find();
      res.status(200).json(allProducts);
    } catch (error) {
      res.status(500).json({ success: false, msg: error });
    }
  },
};
