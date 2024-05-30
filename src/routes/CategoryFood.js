const express = require("express");
const CategoryFoodController = require("../controllers/CategoryFoodController");

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", CategoryFoodController.createCategoryFood);

router.put("/update/:id", CategoryFoodController.updateCategoryFood);

router.get("/get-all", CategoryFoodController.getAll);

router.post("/delete", CategoryFoodController.deleteCategoryFood);

module.exports = router;
