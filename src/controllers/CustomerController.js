const CustomerService = require("../services/CustomerService");

const createCustomer = async (req, res) => {
  try {
    const { name, phone } = req.body;
    if (!name || !phone) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await CustomerService.createCustomer(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const customerId = req.params.id;
    const data = req.body;
    if (!customerId) {
      return res.status(200).json({
        status: "ERR",
        message: "The Customer Id is requireds",
      });
    }
    const response = await CustomerService.updateCustomer(customerId, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const customerId = req.params.id;

    if (!customerId) {
      return res.status(200).json({
        status: "ERR",
        message: "The customer Id is required",
      });
    }

    const response = await CustomerService.getDetail(customerId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const response = await CustomerService.deleteCustomer(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await CustomerService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
module.exports = {
  createCustomer,
  updateCustomer,
  getDetail,
  deleteCustomer,
  getAll,
};
