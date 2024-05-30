const express = require("express");
const CustomerController = require("../controllers/CustomerController");

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", CustomerController.createCustomer);

router.put("/update/:id", CustomerController.updateCustomer);

router.get("/get-details/:id", CustomerController.getDetail);

router.get("/get-all", CustomerController.getAll);

router.post("/delete", CustomerController.deleteCustomer);

module.exports = router;
