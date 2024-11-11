const jwt = require("jsonwebtoken");

module.exports = {
  isAdmin: async (req, res, next) => {
    try {
        const token  = req.query.token || req.body.token;
        const userDetails = jwt.verify(token, process.env.SECRET_KEY);
        if (userDetails.userRole !== 'admin') throw "You are not be able to do that JUST ADMIN!!!"
        next();
    } catch (error) {
        console.log(error)
        res.status(401).json({msg:error})
        
    }

  },
};
