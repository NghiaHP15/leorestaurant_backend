const mongoose = require("mongoose");

const inforSchema = new mongoose.Schema(
  {
    about: {
      name_home: { type: String },
      description_home: { type: String },
      name_about: { type: String },
      description_about: { type: String },
      name_style: { type: String },
      description_style: { type: String },
    },
    footer_log: { type: String },
    footer_socail_media: { type: Array },
    restaurant: { type: Array },
    catalog: { type: Array },
    help: { type: Array },
    hot_tag: { type: Array },
    phone: {
      name: { type: String },
      path: { type: String },
    },
    email: {
      name: { type: String },
      path: { type: String },
    },
    address: {
      name: { type: String },
      path: { type: String },
    },
    time_open: {
      name: { type: String },
      path: { type: String },
    },
    logo: {
      logo_footer: { type: String },
      logo_header_light: { type: String },
      logo_header_dark: { type: String },
      logo_qr: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const Infor = mongoose.model("Infor", inforSchema);
module.exports = Infor;
