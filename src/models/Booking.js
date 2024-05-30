const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    customer_name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
    number_of_guest: { type: Number },
    date: { type: Date, required: true },
    time: { type: Date, required: true },
    combo: { type: mongoose.Schema.Types.ObjectId, ref: "Combo" },
    table: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table",
    },
    food: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Recipe",
        },
        amount: { type: Number },
      },
    ],
    paymentStatus: { type: Boolean, default: false },
    reciveStatus: { type: Boolean, default: false },
    cancel: { type: Boolean, default: false },
    priceCombo: { type: Number },
    priceSale: { type: Number },
    priceSell: { type: Number },
    priceOrigin: { type: Number },
    note: { type: String },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
