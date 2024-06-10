const Booking = require("../models/Booking");
const Table = require("../models/Table");

// const createBooking = (data) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       // Combine date and time into a single datetime object
//       // const bookingDateTime = new Date(`${data.date}T${data.time}`);

//       // Check if there's already a booking for the specified table, date, and time
//       const checkBooking = await Booking.find();

//       // const _checkbooking = checkBooking.some(item => item.date === data.date.toString && item.time === data.time && item.table === data.table)
//       const _checkbooking = checkBooking.some(item => formatDate(item.date) === formatDate(data.date) && formatTime(item.time) === formatTime(data.time)  && (item.table).toString() === (data.table).toString() )
      
//       // If a booking already exists for the specified table, date, and time, throw an error
//       if (_checkbooking) {
//         throw new Error("This table has already been booked for this time.");
//       }
//       else{
//         const createdBooking = await Booking.create(data);
//         resolve({
//           status: "OK",
//           message: "Booking created successfully.",
//           data: createdBooking,
//         });
//       }

//       // Create the new booking if there are no conflicts

//       // If the booking is successfully created, resolve with success message and data
     
//     } catch (error) {
//       // If an error occurs during the process, reject with the error message
//       reject({
//         status: "ERROR",
//         message: error.message,
//       });
//     }
//   });
// };
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
