const express = require("express");
const CategoryBannerController = require("../controllers/CategoryBannerController");

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", CategoryBannerController.createCategoryBanner);

router.put("/update/:id", CategoryBannerController.updateCategoryBanner);

router.get("/get-all", CategoryBannerController.getAll);

router.post("/delete", CategoryBannerController.deleteCategoryBanner);

module.exports = router;
