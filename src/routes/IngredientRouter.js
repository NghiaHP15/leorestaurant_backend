const express = require("express");
const IngredientController = require("../controllers/IngredientController");
const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", verifyToken, authUser, authPage(['Admin','Super']) ,IngredientController.createIngredient);

router.put("/update/:id", verifyToken, authUser, authPage(['Admin','Super']) ,IngredientController.updateIngredient);

router.get("/get-detail/:id", IngredientController.getDetail);

router.get("/get-all", IngredientController.getAll);

router.post("/delete", verifyToken, authUser, authPage(['Admin','Super']) ,IngredientController.deleteIngredient);

module.exports = router;
