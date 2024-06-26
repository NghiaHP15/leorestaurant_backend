const express = require("express");
const ComboController = require("../controllers/ComboController");

const { authMiddleWare } = require("../middleware/authMiddleware");
const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

// router.post("/create",verifyToken, authUser, authPage(['Admin','Super']) , ComboController.createCombo);

// router.put("/update/:id", verifyToken, authUser, authPage(['Admin','Super']) ,ComboController.updateCombo);

// router.get("/get-details/:id", ComboController.getDetail);

// router.get("/get-all", ComboController.getAll);

// router.post("/delete", verifyToken, authUser, authPage(['Admin','Super']) ,ComboController.deleteCombo);

router.post("/create", ComboController.createCombo);

router.put("/update/:id", ComboController.updateCombo);

router.get("/get-details/:id", ComboController.getDetail);

router.get("/get-all", ComboController.getAll);

router.post("/delete", ComboController.deleteCombo);

module.exports = router;
