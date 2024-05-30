const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    categoryFood: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CategoryFood",
      unique: true,
    },
    level: { type: Number },
    timeOn: { type: Date },
    unit: { type: String, unique: true },
    status: { type: String, unique: true },
    priceOrigin: { type: Number },
    priceSale: { type: Number },
    priceSell: { type: Number },
    note: { type: String },
    image: { type: Array },
    steps: { type: Array },
    point: { type: Number, default: 0 },
    show: { type: Boolean, default: false },
    ingredient: [
      {
        _id: { type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" },
        amount: { type: Number },
        unit: { type: String },
        price: { type: Number },
      },
    ],
  },

  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
