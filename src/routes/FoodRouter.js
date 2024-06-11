const express = require("express");
const FoodController = require('../controllers/FoodController')

const { authMiddleWare } = require("../middleware/authMiddleware");
const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

// router.post('/create',verifyToken, authUser, authPage(['Admin','Super']) ,FoodController.createFood)

// router.put('/update/:id', verifyToken, authUser, authPage(['Admin','Super']) , FoodController.updateFood)

// router.get('/get-details/:id', FoodController.getDetail)

// router.get('/get-all', FoodController.getAll)

// router.delete('/delete/:id',verifyToken, authUser, authPage(['Admin','Super']) , FoodController.deleteFood)

router.post('/create',FoodController.createFood)

router.put('/update/:id', authMiddleWare, FoodController.updateFood)

router.get('/get-details/:id', FoodController.getDetail)

router.get('/get-all', FoodController.getAll)

router.delete('/delete/:id', FoodController.deleteFood)

module.exports = router;