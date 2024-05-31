const express = require("express");
const CategoryBannerController = require("../controllers/CategoryBannerController");

const { authMiddleWare } = require("../middleware/authMiddleware");
const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

router.post("/create", verifyToken, authUser, authPage(['Admin','Super']) ,CategoryBannerController.createCategoryBanner);

router.put("/update/:id", verifyToken, authUser, authPage(['Admin','Super']) ,CategoryBannerController.updateCategoryBanner);

router.get("/get-all", CategoryBannerController.getAll);

router.post("/delete", verifyToken, authUser, authPage(['Admin','Super']) ,CategoryBannerController.deleteCategoryBanner);

module.exports = router;
