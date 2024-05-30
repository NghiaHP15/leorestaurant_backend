const CategoryFoodService = require("../services/CategoryFoodService");

const createCategoryFood = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(200).json({
        status: "ERR",
        message: "The name is required",
      });
    }
    const response = await CategoryFoodService.createCategoryFood(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateCategoryFood = async (req, res) => {
  try {
    const categoryfoodId = req.params.id;
    const data = req.body;
    if (!categoryfoodId) {
      return res.status(200).json({
        status: "ERR",
        message: "The Category food id is required",
      });
    }

    const response = await CategoryFoodService.updateCategoryFood(
      categoryfoodId,
      data
    );
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteCategoryFood = async (req, res) => {
  try {
    const response = await CategoryFoodService.deleteCategoryFood(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await CategoryFoodService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
module.exports = {
  createCategoryFood,
  updateCategoryFood,
  deleteCategoryFood,
  getAll,
};
