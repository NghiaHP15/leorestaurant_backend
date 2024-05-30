const express = require("express");
const FoodController = require('../controllers/FoodController')

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post('/create',FoodController.createFood)

router.put('/update/:id', authMiddleWare, FoodController.updateFood)

router.get('/get-details/:id', FoodController.getDetail)

router.get('/get-all', FoodController.getAll)

router.delete('/delete/:id', FoodController.deleteFood)

module.exports = router;