const express = require("express");
const CategoryMenuController = require('../controllers/CategoryMenuController')

const { authMiddleWare } = require("../middleware/authMiddleware");
const { verifyToken, authPage, authUser } = require("../middleware/basicAuth");

const router = express.Router();

router.post('/create',verifyToken, authUser, authPage(['Admin','Super']) ,CategoryMenuController.createCategoryMenu)

router.put('/update/:id', verifyToken, authUser, authPage(['Admin','Super']) , CategoryMenuController.updateCategoryMenu)

router.get('/get-details/:id', CategoryMenuController.getDetail)

router.get('/get-all', CategoryMenuController.getAll)

router.delete('/delete/:id',verifyToken, authUser, authPage(['Admin','Super']) , CategoryMenuController.deleteCategoryMenu)

module.exports = router;