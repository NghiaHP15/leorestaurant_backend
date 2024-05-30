const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, require: true, unique: true },
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    permission: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Permission",
    },
    status: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    access_token: { type: String },
    refresh_token: { type: String },
  },
  {
    timestamps: true,
  }
);

const Permission = require("./Permission");

Permission.aggregate([
  {
    $lookup: {
      from: "permissions", // Tên của collection khác
      localField: "permission", // Trường trong menu collection
      foreignField: "_id", // Trường trong categories collection
      as: "permission_info", // Tên của trường kết quả sau khi "join"
    },
  },
]).exec((err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  // console.log(result);
});
const User = mongoose.model("User", userSchema);
module.exports = User;
