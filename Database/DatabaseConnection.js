const mongoose = require("mongoose");

const dbURI = "mongodb+srv://admin:adminPassword@farming.kjjo4gd.mongodb.net/RR_Farming";
// const dbURI = "mongodb://127.0.0.1:27017/farming";

mongoose.connect(dbURI);
const db = mongoose.connection;

db.on("connected", () => {
  console.log(`Mongoose connected`);
});

db.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

db.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

module.exports = db;
