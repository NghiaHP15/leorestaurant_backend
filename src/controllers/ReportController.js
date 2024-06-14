const ReportService = require("../services/ReportService");

const getAmountBill = async (req, res) => {
  try {
    const resultRole = await ReportService.getAmountBill();
    return res.status(200).json(resultRole);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAmountBooking = async (req, res) => {
  try {
    const resultRole = await ReportService.getAmountBooking();
    return res.status(200).json(resultRole);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAmountCustomer = async (req, res) => {
  try {
    const resultRole = await ReportService.getAmountCustomer();
    return res.status(200).json(resultRole);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getSalesBill = async (req, res) => {
  try {
    const resultRole = await ReportService.getSalesBill();
    return res.status(200).json(resultRole);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getNewCustomer = async (req, res) => {
  try {
    const resultRole = await ReportService.getNewCustomer();
    return res.status(200).json(resultRole);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getNewStaff = async (req, res) => {
  try {
    const resultRole = await ReportService.getNewStaff();
    return res.status(200).json(resultRole);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getSalesFigures = async (req, res) => {
  try {
    const resultRole = await ReportService.getSalesFigures();
    return res.status(200).json(resultRole);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getTopFoods = async (req, res) => {
  try {
    const resultRole = await ReportService.getTopFoods();
    return res.status(200).json(resultRole);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getBookings = async (req, res) => {
  try {
    const resultRole = await ReportService.getBookings();
    return res.status(200).json(resultRole);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getNofity = async (req, res) => {
  try {
    const resultRole = await ReportService.getNofity();
    return res.status(200).json(resultRole);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getReport = async (req, res) => {
  try {
    const resultRole = await ReportService.getReport();
    return res.status(200).json(resultRole);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getReportDay = async (req, res) => {
  try {
    const resultRole = await ReportService.getReportDay();
    return res.status(200).json(resultRole);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  getAmountBill,
  getSalesBill,
  getAmountCustomer,
  getAmountBooking,
  getNewCustomer,
  getNewStaff,
  getSalesFigures,
  getTopFoods,
  getBookings,
  getNofity,
  getReport,
  getReportDay,
};
