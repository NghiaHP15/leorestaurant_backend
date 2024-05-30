const express = require("express");
const GalleryController = require("../controllers/GalleryController");

const router = express.Router();

router.post("/create", GalleryController.createGallery);

router.put("/update/:id", GalleryController.updateGallery);

router.get("/get-all", GalleryController.getAll);

router.post("/delete", GalleryController.deleteGallery);

router.get("/get-details/:id", GalleryController.getDetail);

router.get("/get-all-gallery", GalleryController.getAllGallery);

router.get("/get-all-socal-media", GalleryController.getAllSocalMedia);

module.exports = router;
