const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    image: { type: Array },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categoryingredient",
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
    },
    amount: { type: Number },
    unit: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Ingredient = mongoose.model("Ingredient", ingredientSchema);
module.exports = Ingredient;
