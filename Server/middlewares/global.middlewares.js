module.exports = {
  logger: (req, res, next) => {
    const day = new Date().getDay();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    console.log(`${req.url} ${req.method} ${day}/${month}/${year}`)
    next()
  },
  
};
