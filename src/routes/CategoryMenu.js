const express = require("express");
const CategoryMenuController = require('../controllers/CategoryMenuController')

const { authMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post('/create',CategoryMenuController.createCategoryMenu)

router.put('/update/:id', authMiddleWare, CategoryMenuController.updateCategoryMenu)

router.get('/get-details/:id', CategoryMenuController.getDetail)

router.get('/get-all', CategoryMenuController.getAll)

router.delete('/delete/:id', CategoryMenuController.deleteCategoryMenu)

module.exports = router;