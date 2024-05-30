const mongoose = require("mongoose");

const comboSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String },
    item: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe",
        require: true,
      },
    ],
    count: { type: Number },
    priceOrigin: { type: Number },
    priceSell: { type: Number },
    priceSale: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Combo = mongoose.model("Combo", comboSchema);
module.exports = Combo;
