const mongoose = require("mongoose");

const categoryfoodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const CategoryFood = mongoose.model("CategoryFood", categoryfoodSchema);
module.exports = CategoryFood;
