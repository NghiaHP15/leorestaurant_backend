const express = require("express");
const BannerController = require("../controllers/BannerController");

const router = express.Router();

router.post("/create", BannerController.createBanner);

router.put("/update/:id", BannerController.updateBanner);

router.get("/get-all", BannerController.getAll);

router.post("/delete", BannerController.deleteBanner);

router.get("/get-details/:id", BannerController.getDetail);

router.get("/get-all-slider", BannerController.getAllSlider);

module.exports = router;
