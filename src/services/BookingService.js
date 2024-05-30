const Booking = require("../models/Booking");
const Table = require("../models/Table");

const createBooking = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const createdBooking = await Booking.create(data);

      if (createdBooking) {
        resolve({
          status: "OK",
          message: "Success",
          data: createdBooking,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const updateBooking = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkBooking = await Booking.findOne({
        _id: id,
      });

      if (checkBooking === null) {
        resolve({
          status: "OK",
          message: "The Booking is not defined",
        });
      }

      const updatedBooking = await Booking.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "OK",
        message: "Success",
        data: updatedBooking,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getDetail = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const excludedFields = "-createdAt -updatedAt";
      const booking = await Booking.findOne({
        _id: id,
      })
        .populate("table", excludedFields)
        .populate("food.item");

      if (booking === null) {
        resolve({
          status: "OK",
          message: "The booking is not defined",
        });
      }

      resolve({
        status: "OK",
        message: "Succees",
        data: booking,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const deleteBooking = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkBooking = await Booking.findOne({
        _id: id,
      });

      if (checkBooking === null) {
        resolve({
          status: "OK",
          message: "The Booking is not defined",
        });
      }

      await Booking.findByIdAndDelete(id);

      resolve({
        status: "OK",
        message: "Delete Booking success",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await Booking.find().populate("table");

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
  createBooking,
  updateBooking,
  getDetail,
  deleteBooking,
  getAll,
};
