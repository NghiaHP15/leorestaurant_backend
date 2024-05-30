const express = require("express");
const ReportController = require("../controllers/ReportController");

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/get-amount-bill", ReportController.getAmountBill);

router.get("/get-amount-customer", ReportController.getAmountCustomer);

router.get("/get-amount-booking", ReportController.getAmountBooking);

router.get("/get-sales-bill", ReportController.getSalesBill);

router.get("/get-new-customer", ReportController.getNewCustomer);

router.get("/get-new-staff", ReportController.getNewStaff);

router.get("/get-sales-figures", ReportController.getSalesFigures);

router.get("/get-top-food", ReportController.getTopFoods);

router.get("/get-booking", ReportController.getBookings);

router.get("/get-notify", ReportController.getNofity);

module.exports = router;
