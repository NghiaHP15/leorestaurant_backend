const Customer = require("../models/Customer");

const createCustomer = (newCustomer) => {
  return new Promise(async (resolve, reject) => {
    const { phone } = newCustomer;
    try {
      const checkCustomer = await Customer.findOne({
        phone: phone,
      });
      if (checkCustomer != null) {
        resolve({
          status: "OK",
          message: "Customer is already",
        });
      }
      const createdCustomer = await Customer.create(newCustomer);
      if (createdCustomer) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdCustomer,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateCustomer = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkCustomer = await Customer.findOne({
        _id: id,
      });

      if (checkCustomer === null) {
        resolve({
          status: "OK",
          message: "The Customer is not defined",
        });
      }

      const updatedCustomer = await Customer.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "Success",
        data: updatedCustomer,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetail = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const customer = await Customer.findOne({
        _id: id,
      });

      if (customer === null) {
        resolve({
          status: "OK",
          message: "The customer is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "Succees",
        data: customer,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteCustomer = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);

      const result = await Customer.deleteMany({ _id: { $in: listID } });

      resolve({
        status: "OK",
        message: "Delete is successs",
        deletedCount: result.deletedCount,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Customer.find().sort({ createdAt: -1 });

      resolve({
        status: "OK",
        message: "Get all success",
        data: result,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createCustomer,
  updateCustomer,
  getDetail,
  deleteCustomer,
  getAll,
};
