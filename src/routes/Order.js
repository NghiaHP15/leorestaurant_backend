const express = require("express");
const OrderController = require('../controllers/OrderController')

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post('/create',OrderController.createOrder)

router.put('/update/:id', authMiddleWare, OrderController.updateOrder)

router.get('/get-details/:id', OrderController.getDetail)

router.get('/get-all', OrderController.getAll)

router.delete('/delete/:id', OrderController.deleteOrder)

module.exports = router;