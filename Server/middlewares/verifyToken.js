const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: async (req, res, next) => {
    const { token } = req.cookies;
    try {
      jwt.verify(token, process.env.SECRET_KEY);
      next();
    } catch (error) {
      res.status(401).json({ msg: error });
    }
  },
};
