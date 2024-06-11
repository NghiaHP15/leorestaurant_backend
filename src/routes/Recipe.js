const express = require("express");
const RecipeController = require("../controllers/RecipeController");

const { authMiddleWare } = require("../middleware/authMiddleware");
const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

// router.post("/create", verifyToken, authUser, authPage(['Admin','Super']) ,RecipeController.createRecipe);

// router.put("/update/:id", verifyToken, authUser, authPage(['Admin','Super']) ,RecipeController.updateRecipe);

// router.get("/get-details/:id", RecipeController.getDetail);

// router.get("/get-all", RecipeController.getAll);

// router.post("/delete", verifyToken, authUser, authPage(['Admin','Super']) ,RecipeController.deleteRecipe);

// router.post("/increate-point", verifyToken, authUser, authPage(['Admin','Super']) ,RecipeController.pointRecipe);

// ///// web client

// router.get("/best-sale", RecipeController.bestSale);

// router.get("/best-new", RecipeController.bestNew);

router.post("/create" ,RecipeController.createRecipe);

router.put("/update/:id",RecipeController.updateRecipe);

router.get("/get-details/:id", RecipeController.getDetail);

router.get("/get-all", RecipeController.getAll);

router.post("/delete",RecipeController.deleteRecipe);

router.post("/increate-point",RecipeController.pointRecipe);

///// web client

router.get("/best-sale", RecipeController.bestSale);

router.get("/best-new", RecipeController.bestNew);

module.exports = router;
