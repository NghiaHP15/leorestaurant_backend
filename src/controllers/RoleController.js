const RoleService = require("../services/RoleService");

const listRole = async (req, res) => {
  try {
    const resultRole = await RoleService.listRole();
    return res.status(200).json(resultRole);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
const createRole = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const resultRole = await RoleService.createRole(req.body);
    return res.status(200).json(resultRole);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
const updateRole = async (req, res) => {
  try {
    const roleID = req.params.id;
    const data = req.body;
    if (!roleID) {
      return res.status(200).json({
        status: "ERR",
        message: "The userID is required",
      });
    }
    const resultRole = await RoleService.updateRole(roleID, data);
    return res.status(200).json(resultRole);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteRole = async (req, res) => {
  try {
    const resultRole = await RoleService.deleteRole(req.body);
    return res.status(200).json(resultRole);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  createRole,
  listRole,
  updateRole,
  deleteRole,
};
