const mongoose = require("mongoose");

const categoryTableSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    count: { type: Number },
  },
  {
    timestamps: true,
  }
);

const CategoryTable = mongoose.model("CategoryTable", categoryTableSchema);
module.exports = CategoryTable;
