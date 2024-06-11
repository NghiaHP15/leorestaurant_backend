const express = require("express");
const BannerController = require("../controllers/BannerController");


const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

// router.post("/create", verifyToken, authUser, authPage(['Admin','Super']) , BannerController.createBanner);

// router.put("/update/:id", verifyToken, authUser, authPage(['Admin','Super']) ,BannerController.updateBanner);

// router.get("/get-all", BannerController.getAll);

// router.post("/delete", verifyToken, authUser, authPage(['Admin','Super']) ,BannerController.deleteBanner);

// router.get("/get-details/:id", verifyToken, authUser, authPage(['Admin','Super']) ,BannerController.getDetail);

// router.get("/get-all-slider", BannerController.getAllSlider);

router.post("/create", BannerController.createBanner);

router.put("/update/:id",BannerController.updateBanner);

router.get("/get-all", BannerController.getAll);

router.post("/delete",BannerController.deleteBanner);

router.get("/get-details/:id", BannerController.getDetail);

router.get("/get-all-slider", BannerController.getAllSlider);

module.exports = router;
