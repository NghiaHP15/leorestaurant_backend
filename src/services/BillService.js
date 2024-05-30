const { model } = require("mongoose");
const Bill = require("../models/Bill");
const { v4: uuidv4 } = require("uuid");
const { populate } = require("dotenv");

async function generateUniqueCode(length = 3) {
  let code = uuidv4().substring(0, length);
  while (true) {
    const existing = await Bill.findOne({ code: code });
    if (!existing) {
      break;
    }
    code = uuidv4().substring(0, length);
  }
  return code;
}

const createBill = (newBill) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newCode = await generateUniqueCode(5);
      const _newBill = { ...newBill };
      _newBill.code = `${newCode}`;
      const createdBill = await Bill.create(_newBill);
      console.log(_newBill);
      if (createdBill) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdBill,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateBill = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkBill = await Bill.findOne({
        _id: id,
      });

      if (checkBill === null) {
        resolve({
          status: "OK",
          message: "The Bill is not defined",
        });
      }

      const updatedBill = await Bill.findByIdAndUpdate(id, data, { new: true });

      resolve({
        status: "OK",
        message: "Success",
        data: updatedBill,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetail = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const bill = await Bill.findOne({
        _id: id,
      })
        .populate({
          path: "booking",
          populate: {
            path: "table",
            populate: {
              path: "categoryTable",
            },
          },
        })
        .populate({
          path: "booking",
          populate: {
            path: "food.item",
          },
        });

      if (bill === null) {
        resolve({
          status: "OK",
          message: "The bill is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "Succees",
        data: bill,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteBill = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkBill = await Bill.findOne({
        _id: id,
      });

      if (checkBill === null) {
        resolve({
          status: "OK",
          message: "The Bill is not defined",
        });
      }

      await Bill.findByIdAndDelete(id);

      resolve({
        status: "OK",
        message: "Delete Bill success",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Bill.find().populate({
        path: "booking",
        populate: {
          path: "table",
          model: "Table",
          select: "name categoryTable",
        },
      });

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
  createBill,
  updateBill,
  getDetail,
  deleteBill,
  getAll,
};
