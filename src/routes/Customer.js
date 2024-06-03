const express = require("express");
const CustomerController = require("../controllers/CustomerController");

const { authMiddleWare } = require("../middleware/authMiddleware");

const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

// router.post("/create", verifyToken, authUser, authPage(['Admin','Super']) , CustomerController.createCustomer);

// router.put("/update/:id", verifyToken, authUser, authPage(['Admin','Super']) , CustomerController.updateCustomer);

// router.get("/get-details/:id", verifyToken, authUser, authPage(['Admin','Super']) , CustomerController.getDetail);

// router.get("/get-all", CustomerController.getAll);

// router.post("/delete", verifyToken, authUser, authPage(['Admin','Super']) , CustomerController.deleteCustomer);

router.post("/create", CustomerController.createCustomer);

router.put("/update/:id", CustomerController.updateCustomer);

router.get("/get-details/:id", CustomerController.getDetail);

router.get("/get-all", CustomerController.getAll);

router.post("/delete", CustomerController.deleteCustomer);

module.exports = router;
