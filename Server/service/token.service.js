const jwt = require("jsonwebtoken");

module.exports = {
    createToken: async (user) => {
        const payload = {
          _id: user._id,
          userEmail: user.userEmail,
          userName: user.userName,
          userRole: user.userRole
        };
        const secretKey = process.env.SECRET_KEY;
        const token = jwt.sign(payload, secretKey, {expiresIn: 60 * 60 * 1 });
        return token;
      }
}