const mongoose = require("mongoose");

const categoryBannerSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
  },
  {
    timestamps: true,
  }
);

const CategoryBanner = mongoose.model("CategoryBanner", categoryBannerSchema);
module.exports = CategoryBanner;
