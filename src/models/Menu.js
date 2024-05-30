const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const menuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String },
    item: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipe",
        require: true,
      },
    ],
    count: { type: Number, require: true },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

mongoose.plugin(slug);
const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
