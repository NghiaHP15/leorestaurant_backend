const TableService = require("../services/TableService");

const createTable = async (req, res) => {
  try {
    const { name, categoryTable } = req.body;
    if (!name || !categoryTable) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await TableService.createTable(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateTable = async (req, res) => {
  try {
    const tableId = req.params.id;
    const data = req.body;
    if (!tableId) {
      return res.status(200).json({
        status: "ERR",
        message: "The table Id is required",
      });
    }

    const response = await TableService.updateTable(tableId, data);
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
        message: "The table Id is required",
      });
    }

    const response = await TableService.getDetail(tableId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteTable = async (req, res) => {
  try {
    const response = await TableService.deleteTable(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await TableService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAllFilter = async (req, res) => {
  try {
    const response = await TableService.getAllFilter();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const moveTable = async (req, res) => {
  try {
    const currentTable = req.params.currentTableId;
    const newTable = req.params.newTableId;
    const response = await TableService.moveTable(currentTable, newTable);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
module.exports = {
  createTable,
  updateTable,
  getDetail,
  deleteTable,
  getAll,
  getAllFilter,
  moveTable,
};
