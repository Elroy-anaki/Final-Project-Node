const jwt = require("jsonwebtoken");

module.exports = {
    createToken: async (user) => {
        const payload = {
          _id: user._id,
          user_email: user.user_email,
          user_name: user.user_name
        };
        const secretKey = process.env.SECRET_KEY
        const token = jwt.sign(payload, secretKey, {expiresIn: 60 * 60 * 1 });
        return token
      }
}