const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

async function connect() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect Successfully");
  } catch (error) {
    console.log("Connect failure");
  }
}

module.exports = { connect };
