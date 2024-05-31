const express = require("express");
const BookingController = require("../controllers/BookingController");

const { authMiddleWare } = require("../middleware/authMiddleware");
const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

router.post("/create", verifyToken, authUser, authPage(['Admin','Super']) ,BookingController.createBooking);

router.put("/update/:id", verifyToken, authUser, authPage(['Admin','Super']) ,BookingController.updateBooking);

router.get("/get-details/:id", verifyToken, authUser, authPage(['Admin','Super']) ,BookingController.getDetail);

router.get("/get-all", BookingController.getAll);

router.delete("/delete/:id",verifyToken, authUser, authPage(['Admin','Super']) , BookingController.deleteBooking);

module.exports = router;
