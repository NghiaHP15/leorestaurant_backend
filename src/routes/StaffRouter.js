const express = require("express");
const StaffController = require("../controllers/StaffController");
const {
  authMiddleWare,
  authUserMiddleWare,
} = require("../middleware/authMiddleware");
const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");
const router = express.Router();

// router.post("/create", verifyToken, authUser, authPage(['Admin','Super']) ,StaffController.createStaff);

// router.get("/list", StaffController.listStaff);

// router.post("/delete", verifyToken, authUser, authPage(['Admin','Super']) ,StaffController.deleteStaff);

// router.get("/detail/:id", StaffController.detailStaff);

// router.put("/edit/:id", verifyToken, authUser, authPage(['Admin','Super']) ,StaffController.editStaff);

// router.get("/get-all-chef", StaffController.listStaffChef);

router.post("/create",StaffController.createStaff);

router.get("/list", StaffController.listStaff);

router.post("/delete",StaffController.deleteStaff);

router.get("/detail/:id", StaffController.detailStaff);

router.put("/edit/:id",StaffController.editStaff);

router.get("/get-all-chef", StaffController.listStaffChef);

module.exports = router;
