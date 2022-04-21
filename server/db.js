const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://aayush:Aayush321@ecommerce.2p8yh.mongodb.net/mern-pizza";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on("connected", () => {
  console.log(`Successfully connected to DB`);
});

db.on("error", () => {
  console.log(`Connection Failed`);
});

module.exports = mongoose;
