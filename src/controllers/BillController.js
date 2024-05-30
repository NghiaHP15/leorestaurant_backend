const BillService = require("../services/BillService");

const createBill = async (req, res) => {
  try {
    const { booking, timeOn } = req.body;
    if (!booking || !timeOn) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await BillService.createBill(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateBill = async (req, res) => {
  try {
    const billId = req.params.id;
    const data = req.body;
    if (!billId) {
      return res.status(200).json({
        status: "ERR",
        message: "The bill Id is required",
      });
    }

    const response = await BillService.updateBill(billId, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const billId = req.params.id;

    if (!billId) {
      return res.status(200).json({
        status: "ERR",
        message: "The bill Id is required",
      });
    }

    const response = await BillService.getDetail(billId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteBill = async (req, res) => {
  try {
    const billId = req.params.id;
    if (!billId) {
      return res.status(200).json({
        status: "ERR",
        message: "The bill Id is required",
      });
    }

    const response = await BillService.deleteBill(billId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await BillService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

module.exports = {
  createBill,
  updateBill,
  getDetail,
  deleteBill,
  getAll,
};
