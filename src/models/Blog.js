const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const blogSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String },
    description: { type: String },
    content: { type: String },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      require: true,
    },
    show: { type: Boolean, default: false },
    popular: { type: Boolean, default: false },
    slug: { type: String, slug: "name", unique: true },
  },

  {
    timestamps: true,
  }
);

mongoose.plugin(slug);
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
