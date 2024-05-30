const express = require("express");

const MenuController = require("../controllers/MenuController");

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", MenuController.createMenu);

router.put("/update/:id", MenuController.updateMenu);

router.get("/get-details/:id", MenuController.getDetail);

router.get("/get-all", MenuController.getAll);

router.post("/delete", MenuController.deleteMenu);

module.exports = router;
