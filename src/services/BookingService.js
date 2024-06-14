const Booking = require("../models/Booking");
const Table = require("../models/Table");

const formatDate = (dateString) => {
  let date = new Date(dateString);
  let day = date.getDate();
  let month = date.getMonth() + 1; // Months are zero indexed
  let year = date.getFullYear(); // Get last two digits of the year

  // Add leading zero if day or month is less than 10
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;

  return `${day}/${month}/${year}`;
};

const createBooking = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkBooking = await Booking.find().sort({ createdAt: -1 }).exec();

      const _checkbooking = checkBooking.some(
        (item) =>
          formatDate(item.date) === formatDate(data.date) &&
          Math.abs(
            new Date(data.time).getHours() - new Date(item.time).getHours()
          ) < 6 &&
          item.table.toString() === data.table.toString() &&
          item.cancel === false &&
          item.paymentStatus === false
      );

      if (_checkbooking) {
        resolve({
          status: "OK",
          message: "Booking created successfully.",
          error: "already",
        });
      } else {
        const createdBooking = await Booking.create(data);
        resolve({
          status: "OK",
          message: "Booking created successfully.",
          data: createdBooking,
        });
      }
    } catch (error) {
      // If an error occurs during the process, reject with the error message
      reject({
        status: "ERROR",
        message: error.message,
      });
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
      const result = await Booking.find().populate("table").sort({ createdAt: -1 });

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
