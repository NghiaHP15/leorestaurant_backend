const mongoose = require("mongoose");

const AreaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    table: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Table",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Area = mongoose.model("Area", AreaSchema);
module.exports = Area;
