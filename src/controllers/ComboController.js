const ComboService = require("../services/ComboService");

const createCombo = async (req, res) => {
  try {
    const { name, item, priceSell } = req.body;
    if (!name || item.length === 0 || !priceSell) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await ComboService.createCombo(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateCombo = async (req, res) => {
  try {
    const comboID = req.params.id;
    const data = req.body;
    if (!comboID) {
      return res.status(200).json({
        status: "ERR",
        message: "The combo ID is required",
      });
    }

    const response = await ComboService.updateCombo(comboID, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const comboID = req.params.id;

    if (!comboID) {
      return res.status(200).json({
        status: "ERR",
        message: "The combo ID is required",
      });
    }

    const response = await ComboService.getDetail(comboID);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteCombo = async (req, res) => {
  try {
    const response = await ComboService.deleteCombo(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await ComboService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
module.exports = {
  createCombo,
  updateCombo,
  getDetail,
  deleteCombo,
  getAll,
};
