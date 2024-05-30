const CategoryTableService = require("../services/CategoryTableService");

const createCategoryTable = async (req, res) => {
  try {
    const { name, amount } = req.body;
    if (!name || !amount) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await CategoryTableService.createCategoryTable(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateCategoryTable = async (req, res) => {
  try {
    const tableId = req.params.id;
    const data = req.body;
    if (!tableId) {
      return res.status(200).json({
        status: "ERR",
        message: "The categorytable Id is required",
      });
    }

    const response = await CategoryTableService.updateCategoryTable(
      tableId,
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
    const tableId = req.params.id;

    if (!tableId) {
      return res.status(200).json({
        status: "ERR",
        message: "The categorytable Id is required",
      });
    }

    const response = await CategoryTableService.getDetail(tableId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteCategoryTable = async (req, res) => {
  try {
    const response = await CategoryTableService.deleteCategoryTable(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await CategoryTableService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
module.exports = {
  createCategoryTable,
  updateCategoryTable,
  getDetail,
  deleteCategoryTable,
  getAll,
};
