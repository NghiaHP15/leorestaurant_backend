const express = require("express");
const CategoryTableController = require("../controllers/CategoryTableController");

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", CategoryTableController.createCategoryTable);

router.put("/update/:id", CategoryTableController.updateCategoryTable);

router.get("/get-details/:id", CategoryTableController.getDetail);

router.get("/get-all", CategoryTableController.getAll);

router.post("/delete", CategoryTableController.deleteCategoryTable);

module.exports = router;
