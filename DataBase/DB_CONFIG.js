const mongoose = require("mongoose");

async function connectDB() {
  const CONNECTION_STRING = process.env.CONNECTION_STRING;
  console.log(CONNECTION_STRING)
  try {
    await mongoose.connect(CONNECTION_STRING);
    console.log("Mongo is here...");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
