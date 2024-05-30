const mongoose = require('mongoose');

const categorymenuSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true},
    },
    {
        timestamps: true,
    }
);

const CategoryMenu = mongoose.model("CategoryMenu", categorymenuSchema);
module.exports = CategoryMenu;