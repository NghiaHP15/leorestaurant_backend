const express = require("express");

const MenuController = require("../controllers/MenuController");

const { authMiddleWare } = require("../middleware/authMiddleware");
const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

// router.post("/create", verifyToken, authUser, authPage(['Admin','Super']) ,MenuController.createMenu);

// router.put("/update/:id", verifyToken, authUser, authPage(['Admin','Super']) ,MenuController.updateMenu);

// router.get("/get-details/:id", MenuController.getDetail);

// router.get("/get-all", MenuController.getAll);

// router.post("/delete", verifyToken, authUser, authPage(['Admin','Super']) ,MenuController.deleteMenu);

router.post("/create", MenuController.createMenu);

router.put("/update/:id", MenuController.updateMenu);

router.get("/get-details/:id", MenuController.getDetail);

router.get("/get-all", MenuController.getAll);

router.post("/delete", MenuController.deleteMenu);

module.exports = router;
