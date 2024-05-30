const RecipeService = require("../services/RecipeService");

const createRecipe = async (req, res) => {
  try {
    const { name, categoryFood, status, unit } = req.body;
    if (!name || !categoryFood || !status || !unit) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await RecipeService.createRecipe(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const data = req.body;
    if (!recipeId) {
      return res.status(200).json({
        status: "ERR",
        message: "The recipe Id is required",
      });
    }

    const response = await RecipeService.updateRecipe(recipeId, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const recipeId = req.params.id;

    if (!recipeId) {
      return res.status(200).json({
        status: "ERR",
        message: "The recipe Id is required",
      });
    }

    const response = await RecipeService.getDetail(recipeId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const response = await RecipeService.deleteRecipe(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await RecipeService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const pointRecipe = async (req, res) => {
  try {
    const data = req.body;
    const response = await RecipeService.pointRecipe(data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const bestNew = async (req, res) => {
  try {
    const response = await RecipeService.bestNew();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const bestSale = async (req, res) => {
  try {
    const response = await RecipeService.bestSale();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  createRecipe,
  updateRecipe,
  getDetail,
  deleteRecipe,
  getAll,
  pointRecipe,
  bestNew,
  bestSale,
};
