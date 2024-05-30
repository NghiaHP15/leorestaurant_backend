const express = require("express");
const uploader = require("../config/cloudinary.config");
const UploadController = require("../controllers/UploadController");

const router = express.Router();

router.post("/image", uploader.single("image"), UploadController.uploadImages);

router.post(
  "/images",
  uploader.array("image", 10),
  UploadController.uploadArrayImages
);

module.exports = router;
