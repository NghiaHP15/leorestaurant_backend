const Menu = require("../models/Menu");
const MenuService = require("../services/MenuService");

const createMenu = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await MenuService.createMenu(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateMenu = async (req, res) => {
  try {
    const menuId = req.params.id;
    const data = req.body;
    if (!menuId) {
      return res.status(200).json({
        status: "ERR",
        message: "Menu id is required",
      });
    }

    const response = await MenuService.updateMenu(menuId, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const menuId = req.params.id;

    if (!menuId) {
      return res.status(200).json({
        status: "ERR",
        message: "The menu Id is required",
      });
    }

    const response = await MenuService.getDetail(menuId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteMenu = async (req, res) => {
  try {
    const response = await MenuService.deleteMenu(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await MenuService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  createMenu,
  updateMenu,
  getDetail,
  deleteMenu,
  getAll,
};
