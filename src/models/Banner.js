const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
  {
    link: { type: String },
    categoryBanner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CategoryBanner",
      require: true,
    },
    image: { type: String },
    show: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Banner = mongoose.model("Banner", bannerSchema);
module.exports = Banner;
