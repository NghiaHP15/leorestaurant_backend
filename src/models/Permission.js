const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    description: { type: String },
    function: [
      {
        function_id: { type: String },
        create: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Permission = mongoose.model("Permission", permissionSchema);
module.exports = Permission;
