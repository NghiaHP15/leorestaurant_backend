const express = require("express");
const CategoryIngredientController = require("../controllers/CategoryIngredientController");

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", CategoryIngredientController.createCategoryIngredient);

router.put(
  "/update/:id",
  CategoryIngredientController.updateCategoryIngredient
);

router.get("/get-all", CategoryIngredientController.getAll);

router.post("/delete", CategoryIngredientController.deleteCategoryIngredient);

module.exports = router;
