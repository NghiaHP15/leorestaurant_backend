const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, require: true, unique: true },
    date_birth: { type: Date },
    address: {
      city: { type: String },
      district: { type: String },
      ward: { type: String },
      detail: { type: String },
    },
    identification: { type: Number, require: true, unique: true },
    gender: { type: String },
    status: { type: String },
    content: { type: String },
    date_work: { type: Date },
    phone: { type: Number, require: true },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    image: { type: String, default: "" },
    discribe: { type: String },
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const Staff = mongoose.model("Staff", staffSchema);
module.exports = Staff;
