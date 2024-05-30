const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    status: { type: Boolean, default: false },
    receive: { type: Boolean, default: false },
    order: { type: Boolean, default: false },
    categoryTable: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CategoryTable",
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Table = mongoose.model("Table", TableSchema);
module.exports = Table;
