const express = require("express");
const CategoryGalleryController = require("../controllers/CategoryGalleryController");

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", CategoryGalleryController.createCategoryGallery);

router.get("/get-all", CategoryGalleryController.getAll);

router.post("/delete", CategoryGalleryController.deleteCategoryGallery);

module.exports = router;
