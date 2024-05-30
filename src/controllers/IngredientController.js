const IngredientService = require("../services/IngredientService");

const createIngredient = async (req, res) => {
  try {
    const { name, category, unit, price } = req.body;
    if (!name || !category || !unit || !price) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }

    const response = await IngredientService.createIngredient(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateIngredient = async (req, res) => {
  try {
    const IngredientId = req.params.id;
    const data = req.body;
    if (!IngredientId) {
      return res.status(200).json({
        status: "ERR",
        message: "Ingredient id is required",
      });
    }

    const response = await IngredientService.updateIngredient(
      IngredientId,
      data
    );
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const IngredientId = req.params.id;

    if (!IngredientId) {
      return res.status(200).json({
        status: "ERR",
        message: "The Ingredient Id is required",
      });
    }

    const response = await IngredientService.getDetail(IngredientId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteIngredient = async (req, res) => {
  try {
    const response = await IngredientService.deleteIngredient(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await IngredientService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
module.exports = {
  createIngredient,
  updateIngredient,
  getDetail,
  deleteIngredient,
  getAll,
};
