const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const Role = mongoose.model("Role", roleSchema);
module.exports = Role;
