const express = require("express");
const CategoryIngredientController = require("../controllers/CategoryIngredientController");

const { authMiddleWare } = require("../middleware/authMiddleware");
const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

// router.post("/create", verifyToken, authUser, authPage(['Admin','Super']) ,CategoryIngredientController.createCategoryIngredient);

// router.put(
//   "/update/:id",verifyToken, authUser, authPage(['Admin','Super']) ,
//   CategoryIngredientController.updateCategoryIngredient
// );

// router.get("/get-all", CategoryIngredientController.getAll);

// router.post("/delete", verifyToken, authUser, authPage(['Admin','Super']) ,CategoryIngredientController.deleteCategoryIngredient);

router.post("/create", CategoryIngredientController.createCategoryIngredient);

router.put(
  "/update/:id",
  CategoryIngredientController.updateCategoryIngredient
);

router.get("/get-all", CategoryIngredientController.getAll);

router.post("/delete", CategoryIngredientController.deleteCategoryIngredient);

module.exports = router;
