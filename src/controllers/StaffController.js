const StaffService = require("../services/StaffService");
const UserService = require("../services/UserService");

const createStaff = async (req, res) => {
  try {
    const data = req.body;
    const { name, email, identification, phone } = data;
    if (!name || !email || !identification || !phone) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const resultStaff = await StaffService.createStaff(data);
    return res.status(200).json(resultStaff);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const listStaff = async (req, res) => {
  try {
    const resultStaff = await StaffService.listStaff();
    return res.status(200).json(resultStaff);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteStaff = async (req, res) => {
  try {
    const resultStaff = await StaffService.deleteStaff(req.body);
    return res.status(200).json(resultStaff);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const detailStaff = async (req, res) => {
  try {
    const staffID = req.params.id;
    if (!staffID) {
      return res.status(200).json({
        status: "ERR",
        message: "The staffID is required",
      });
    }
    const resultStaff = await StaffService.detailStaff(staffID);
    return res.status(200).json(resultStaff);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const editStaff = async (req, res) => {
  try {
    const staffID = req.params.id;
    const data = req.body;
    if (!staffID) {
      return res.status(200).json({
        status: "ERR",
        message: "The staffID is required",
      });
    }
    const resultStaff = await StaffService.editStaff(staffID, data);
    return res.status(200).json(resultStaff);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const listStaffChef = async (req, res) => {
  try {
    const resultStaff = await StaffService.listStaffChef();
    return res.status(200).json(resultStaff);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  createStaff,
  listStaff,
  deleteStaff,
  detailStaff,
  editStaff,
  listStaffChef,
};
