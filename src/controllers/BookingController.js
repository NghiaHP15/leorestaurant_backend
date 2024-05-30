const BookingService = require("../services/BookingService");

const createBooking = async (req, res) => {
  try {
    const { customer_name, date, phone, time } = req.body;
    if (!customer_name || !date || !phone || !time) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await BookingService.createBooking(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const updateBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const data = req.body;
    if (!bookingId) {
      return res.status(200).json({
        status: "ERR",
        message: "The booking Id is required",
      });
    }

    const response = await BookingService.updateBooking(bookingId, data);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const bookingId = req.params.id;

    if (!bookingId) {
      return res.status(200).json({
        status: "ERR",
        message: "The booking Id is required",
      });
    }

    const response = await BookingService.getDetail(bookingId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    if (!bookingId) {
      return res.status(200).json({
        status: "ERR",
        message: "The booking Id is required",
      });
    }

    const response = await BookingService.deleteBooking(bookingId);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await BookingService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({
      message: error,
    });
  }
};
module.exports = {
  createBooking,
  updateBooking,
  getDetail,
  deleteBooking,
  getAll,
};
