const mongoose = require("mongoose");

const categoryingredientSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const Categoryingredient = mongoose.model(
  "Categoryingredient",
  categoryingredientSchema
);
module.exports = Categoryingredient;
