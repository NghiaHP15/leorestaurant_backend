const Area = require("../models/Area");
const Booking = require("../models/Booking");
const Bill = require("../models/Bill");
const Table = require("../models/Table");
const { ObjectId } = require("mongodb");

const createArea = (newArea) => {
  return new Promise(async (resolve, reject) => {
    const { name } = newArea;
    try {
      const checkArea = await Area.findOne({
        name: name,
      });
      if (checkArea) {
        resolve({
          status: "OK",
          message: "Khu vực sớm tồn tại",
        });
      }
      const createdArea = await Area.create(newArea);
      if (createdArea) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdArea,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateArea = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkArea = await Area.findOne({
        _id: id,
      });

      if (checkArea === null) {
        resolve({
          status: "OK",
          message: "The Table is not defined",
        });
      }

      const updatedArea = await Area.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "Success",
        data: updatedArea,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetail = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Area.findOne({
        _id: id,
      }).populate({
        path: "table",
        populate: {
          path: "categoryTable", // Đường dẫn tới trường categoryTable trong table
        },
      });

      if (result === null) {
        resolve({
          status: "OK",
          message: "The table is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "Succees",
        data: result,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteArea = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const listID = data.map((item) => item._id);
      const result = await Area.deleteMany({ _id: { $in: listID } });

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

// const getAll = () => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const result = await Area.find().populate("table");

//       resolve({
//         status: "OK",
//         message: "Get all success",
//         data: result,
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });
// };

const getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Area.find().populate("table").sort({ createdAt: -1 });

      const booking = [
        ...new Set(
          (await Booking.find().populate("table")).map((item) => {
            if (item.reciveStatus === false && !item.cancel) {
              return item.table._id.toString();
            }
          })
        ),
      ];

      const bill = [
        ...new Set(
          (
            await Bill.find().populate({
              path: "booking",
              populate: {
                path: "table",
              },
            })
          )

            .map((item) => {
              if (item.isPaid === false && item.cancel.status === false) {
                return item.booking.table._id.toString();
              }
            })
            .filter((item) => item)
        ),
      ];

      const table = await Table.find();

      for (item of table) {
        item.status = booking.includes(item._id.toString());
        await Table.findOneAndUpdate(item._id, item, { new: true });
      }

      for (item of table) {
        item.receive = bill.includes(item._id.toString());
        await Table.findOneAndUpdate(item._id, item, { new: true });
      }

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
  createArea,
  updateArea,
  getDetail,
  deleteArea,
  getAll,
  // getTable,
};
