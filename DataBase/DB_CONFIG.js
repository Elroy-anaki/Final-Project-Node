const mongoose = require("mongoose");

async function connectDB() {
  // const CONNECTION_STRING = process.env.CONNECTION_STRING;
  const CONNECTION_STRING = "mongodb+srv://elroy:anaki1912@nodepractice.gaf9k.mongodb.net/Final_Project_Node";
  try {
    await mongoose.connect(CONNECTION_STRING);
    console.log("Mongo is here...");

  } catch (error) {
    console.log("ERRRRRRO");
  }
}

module.exports = connectDB;
