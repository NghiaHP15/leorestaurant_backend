const mongoose = require("mongoose");

const permissionFunctionSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const Permissionfunction = mongoose.model(
  "permissionFunction",
  permissionFunctionSchema
);
module.exports = Permissionfunction;
