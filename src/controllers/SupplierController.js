const SupplierService = require("../services/SupplierService");

const createSupplier = async (req, res) => {
  try {
    const { name, phone, address, email } = req.body;
    if (!name || !phone || !address || !email) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await SupplierService.createSupplier(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateSupplier = async (req, res) => {
  try {
    const supplierId = req.params.id;
    const data = req.body;
    if (!supplierId) {
      return res.status(200).json({
        status: "ERR",
        message: "The table Id is required",
      });
    }

    const response = await SupplierService.updateSupplier(supplierId, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const supplierId = req.params.id;

    if (!supplierId) {
      return res.status(200).json({
        status: "ERR",
        message: "The supplier Id is required",
      });
    }

    const response = await SupplierService.getDetail(supplierId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteSupplier = async (req, res) => {
  try {
    const response = await SupplierService.deleteSupplier(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await SupplierService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
module.exports = {
  createSupplier,
  updateSupplier,
  getDetail,
  deleteSupplier,
  getAll,
};
