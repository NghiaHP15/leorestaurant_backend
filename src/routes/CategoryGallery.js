const express = require("express");
const CategoryGalleryController = require("../controllers/CategoryGalleryController");

const { authMiddleWare } = require("../middleware/authMiddleware");
const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

router.post("/create",verifyToken, authUser, authPage(['Admin','Super']) , CategoryGalleryController.createCategoryGallery);

router.get("/get-all", CategoryGalleryController.getAll);

router.post("/delete",verifyToken, authUser, authPage(['Admin','Super']) , CategoryGalleryController.deleteCategoryGallery);

module.exports = router;
