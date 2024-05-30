const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    link: { type: String },
    categoryGallery: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CategoryGallery",
      require: true,
    },
    image: { type: String },
    show: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Gallery = mongoose.model("Gallery", gallerySchema);
module.exports = Gallery;
