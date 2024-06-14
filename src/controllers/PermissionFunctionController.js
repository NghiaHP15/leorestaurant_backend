const PermissionFunctionService = require("../services/PermissionFunctionService");

const createPermissionFunction = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await PermissionFunctionService.createPermissionFunction(
      req.body
    );
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updatePermissionFunction = async (req, res) => {
  try {
    const permissionId = req.params.id;
    const data = req.body;
    if (!permissionId) {
      return res.status(200).json({
        status: "ERR",
        message: "The permission Id is required",
      });
    }

    const response = await PermissionFunctionService.updatePermissionFunction(
      permissionId,
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
    const permissionId = req.params.id;

    if (!permissionId) {
      return res.status(200).json({
        status: "ERR",
        message: "The permission Id is required",
      });
    }

    const response = await PermissionFunctionService.getDetail(customerId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deletePermissionFunction = async (req, res) => {
  try {
    const permissionId = req.params.id;
    // const token = req.headers;
    if (!permissionId) {
      return res.status(200).json({
        status: "ERR",
        message: "The permission Id is required",
      });
    }

    const response = await PermissionFunctionService.deletePermissionFunction(
      permissionId
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
    const response = await PermissionFunctionService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
module.exports = {
  createPermissionFunction,
  updatePermissionFunction,
  getDetail,
  deletePermissionFunction,
  getAll,
};
