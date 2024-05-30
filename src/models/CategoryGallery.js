const mongoose = require("mongoose");

const categoryGallerySchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const CategoryGallery = mongoose.model(
  "CategoryGallery",
  categoryGallerySchema
);
module.exports = CategoryGallery;
