const express = require("express");
const BookingController = require("../controllers/BookingController");

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", BookingController.createBooking);

router.put("/update/:id", BookingController.updateBooking);

router.get("/get-details/:id", BookingController.getDetail);

router.get("/get-all", BookingController.getAll);

router.delete("/delete/:id", BookingController.deleteBooking);

module.exports = router;
