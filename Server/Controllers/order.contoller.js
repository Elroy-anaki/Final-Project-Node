const orderModel = require("../models/order.model");
const productModel = require("../models/product.model");

module.exports = {
  createOrder: async (req, res) => {
    try {
      const order = await orderModel.create(req.body);
      res.status(201).json({ success: true, msg: "order added!", order });
    } catch (error) {
      res.status(500).json({ success: false, msg: error });
    }
  },
  getOrderById: async (req, res) => {
    try {
      const order = await orderModel.findById(req.params.id);
      res.status(200).json({ succses: true, order });
    } catch (error) {
      res.status(500).json({ succses: true, msg: error });
    }
  },
  deleteOrderById: async (req, res) => {
    try {
        const {id} = req.params;
        if (!id) throw " the order doesn't exist!";
        
      const deletedOrder = await orderModel.findByIdAndDelete(id);
      res
        .status(200)
        .json({ succses: true, msg: "The order Deleted", deletedOrder });
    } catch (error) {
      res.status(500).json({ succses: false, msg: error });
    }
  },
};
