const CategoryIngredientService = require("../services/CategoryIngredientService");

const createCategoryIngredient = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(200).json({
        status: "ERR",
        message: "The name is required",
      });
    }
    const response = await CategoryIngredientService.createCategoryIngredient(
      req.body
    );
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateCategoryIngredient = async (req, res) => {
  try {
    const categoryIngredientId = req.params.id;
    const data = req.body;
    if (!categoryIngredientId) {
      return res.status(200).json({
        status: "ERR",
        message: "The Category Ingredient id is required",
      });
    }

    const response = await CategoryIngredientService.updateCategoryIngredient(
      categoryIngredientId,
      data
    );
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteCategoryIngredient = async (req, res) => {
  try {
    const response = await CategoryIngredientService.deleteCategoryIngredient(
      req.body
    );
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await CategoryIngredientService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
module.exports = {
  createCategoryIngredient,
  updateCategoryIngredient,
  deleteCategoryIngredient,
  getAll,
};
