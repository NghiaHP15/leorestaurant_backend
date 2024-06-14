const mongoose = require("mongoose");

const billSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
    timeOn: { type: Date },
    timeOut: { type: Date },
    servicePrice: { type: Number, default: 5 },
    paymentMethod: { type: String },
    total: { type: Number },
    name_staff: { type: String },
    isPaid: { type: Boolean, default: false },
    cancel: {
      status: { type: Boolean, default: false },
      reason: { type: String, default: "" },
    },
  },
  {
    timestamps: true,
  }
);

const Bill = mongoose.model("Bill", billSchema);
module.exports = Bill;
