const productModel = require("../Models/Product.model");

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const allProducts = await productModel.find();
      console.log(allProducts);
      return res.json({
        success: true,
        message: "success add Products",
        allProducts,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "not success add Products",
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
    try {
      const product = await productModel.create(newProdcut);
      res.json({
        success: true,
        message: "added product!",
        product,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "NOT added product!",
        error,
      });
    }
  },
  editProduct: async (req, res) => {
    try {
      const id = req.body.id;
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
      res.send(deletedProduct);
    } catch (error) {}
  },
};
