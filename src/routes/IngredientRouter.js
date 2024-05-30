const express = require("express");
const IngredientController = require("../controllers/IngredientController");

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", IngredientController.createIngredient);

router.put("/update/:id", IngredientController.updateIngredient);

router.get("/get-detail/:id", IngredientController.getDetail);

router.get("/get-all", IngredientController.getAll);

router.post("/delete", IngredientController.deleteIngredient);

module.exports = router;
