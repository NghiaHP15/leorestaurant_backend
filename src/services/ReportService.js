const Bill = require("../models/Bill");
const Customer = require("../models/Customer");
const Booking = require("../models/Booking");
const Staff = require("../models/Staff");
const Recipe = require("../models/Recipe");

const getAmountBill = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const bill = await Bill.find();
      const count = bill.reduce((acc, invoice) => {
        const year = invoice.timeOn.getFullYear();
        if (!acc[year]) {
          acc[year] = 0;
        }
        acc[year]++;
        return acc;
      }, {});

      resolve({
        status: "OK",
        message: "Lay du lieu thanh cong",
        data: count,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAmountBooking = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const booking = await Booking.find();
      const count = booking.reduce((acc, item) => {
        const year = item.date.getFullYear();
        if (!acc[year]) {
          acc[year] = 0;
        }
        acc[year]++;
        return acc;
      }, {});

      resolve({
        status: "OK",
        message: "Lay du lieu thanh cong",
        data: count,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getAmountCustomer = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const customer = await Customer.find();
      const count = customer.reduce((acc, item) => {
        const year = item.createdAt.getFullYear();
        if (!acc[year]) {
          acc[year] = 0;
        }
        acc[year]++;
        return acc;
      }, {});

      resolve({
        status: "OK",
        message: "Lay du lieu thanh cong",
        data: count,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getSalesBill = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const bill = await Bill.find();
      let total = 0;
      const count = bill.reduce((acc, invoice) => {
        const year = invoice.timeOn.getFullYear();
        if (!acc[year]) {
          acc[year] = 0;
        }
        if (invoice.total) {
          total = total + invoice.total;
        }
        acc[year] = total;
        return acc;
      }, {});

      resolve({
        status: "OK",
        message: "Lay du lieu thanh cong",
        data: count,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getNewCustomer = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const customer = await Customer.find().sort({ createdAt: -1 }).limit(4);
      resolve({
        status: "OK",
        message: "Lay du lieu thanh cong",
        data: customer,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getNewStaff = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const staff = await Staff.find()
        .sort({ createdAt: -1 })
        .limit(4)
        .populate("role");
      resolve({
        status: "OK",
        message: "Lay du lieu thanh cong",
        data: staff,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getSalesFigures = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const bill = await Bill.find().populate("booking");
      const data = bill.reduce(
        (acc, invoice) => {
          const year = invoice.timeOn.getFullYear();
          const month = invoice.timeOn.getMonth() + 1;
          const key = `${year}-${month.toString().padStart(2, "0")}`;
          if (!acc.sales[key]) {
            acc.sales[key] = 0;
          }
          if (!acc.origin[key]) {
            acc.origin[key] = 0;
          }

          acc.sales[key] += invoice.total || 0;
          acc.origin[key] += invoice.booking.priceOrigin || 0;
          return acc;
        },
        { sales: {}, origin: {} }
      );

      resolve({
        status: "OK",
        message: "Lay du lieu thanh cong",
        data: data,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getTopFoods = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const recipe = (await Recipe.find().sort({ point: -1 }).limit(5))
        .map((item) => {
          return {
            name: item.name,
            point: item.point,
          };
        })
        .sort();

      resolve({
        status: "OK",
        message: "Lay du lieu thanh cong",
        data: recipe,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getBookings = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const booking = await Booking.find();
      const data = booking.reduce(
        (acc, table) => {
          const year = table.updatedAt.getFullYear();
          const month = table.updatedAt.getMonth() + 1;
          const key = `${year}-${month.toString().padStart(2, "0")}`;
          if (!acc.booking[key]) {
            acc.booking[key] = 0;
          }
          acc.booking[key] += 1;
          if (!acc.recive[key]) {
            acc.recive[key] = 0;
          }
          if (table.reciveStatus === true) {
            acc.recive[key] += 1;
          }
          return acc;
        },
        { booking: {}, recive: {} }
      );

      resolve({
        status: "OK",
        message: "Lay du lieu thanh cong",
        data: data,
      });
    } catch (error) {
      reject(error);
    }
  });
};

const getNofity = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const booking = await Booking.find().sort({ createdAt: -1 }).limit(10);

      resolve({
        status: "OK",
        message: "Lay du lieu thanh cong",
        data: booking,
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAmountBill,
  getSalesBill,
  getAmountCustomer,
  getAmountBooking,
  getNewCustomer,
  getNewStaff,
  getSalesFigures,
  getTopFoods,
  getBookings,
  getNofity,
};