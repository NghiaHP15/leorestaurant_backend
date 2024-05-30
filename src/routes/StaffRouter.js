const express = require("express");
const StaffController = require("../controllers/StaffController");
const {
  authMiddleWare,
  authUserMiddleWare,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", StaffController.createStaff);

router.get("/list", StaffController.listStaff);

router.post("/delete", StaffController.deleteStaff);

router.get("/detail/:id", StaffController.detailStaff);

router.put("/edit/:id", StaffController.editStaff);

router.get("/get-all-chef", StaffController.listStaffChef);

// router.get("/get-detail/:id", UserController.getDetailStaff);

module.exports = router;
