const Supplier = require("../models/Supplier");
const { v4: uuidv4 } = require("uuid");

async function generateUniqueCode(length = 5) {
  let code = uuidv4().substring(0, length);
  while (true) {
    const existing = await Supplier.findOne({ code: code });
    if (!existing) {
      break;
    }
    code = uuidv4().substring(0, length);
  }
  return code;
}

const createSupplier = (newSupplier) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newCode = await generateUniqueCode(5);
      const _supplier = { ...newSupplier };
      _supplier.code = `NL${newCode}`;
      const { name, email } = _supplier;
      console.log(_supplier);
      const checkEmail = await Supplier.findOne({ email: email });
      const checkName = await Supplier.findOne({ name: name });

      console.log(checkName);
      if (checkName) {
        resolve({
          status: "OK",
          error: "name",
          message: "Supplier is already",
        });
      }
      if (checkEmail) {
        resolve({
          status: "OK",
          error: "email",
          message: "Email is already",
        });
      }
      const dataSupplier = await Supplier.create(_supplier);
      if (dataSupplier) {
        resolve({
          status: "OK",
          message: "Success",
          data: dataSupplier,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateSupplier = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkSupplier = await Supplier.findOne({
        _id: id,
      });

      if (checkSupplier === null) {
        resolve({
          status: "OK",
          message: "The Supplier is not defined",
        });
      }

      const updatedSupplier = await Supplier.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "Success",
        data: updatedSupplier,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetail = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const supplier = await Supplier.findOne({
        _id: id,
      });

      if (supplier === null) {
        resolve({
          status: "OK",
          message: "The supplier is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "Succees",
        data: supplier,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteSupplier = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);
      const result = await Supplier.deleteMany({ _id: { $in: listID } });

      resolve({
        status: "OK",
        message: "The Supplier is not defined",
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
      const data = await Supplier.find().sort({ createdAt: -1 });
      resolve({
        status: "OK",
        message: "Get all success",
        data: data,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createSupplier,
  updateSupplier,
  getDetail,
  deleteSupplier,
  getAll,
};
