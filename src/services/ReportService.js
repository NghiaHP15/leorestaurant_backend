const Bill = require("../models/Bill");
const Customer = require("../models/Customer");
const Booking = require("../models/Booking");
const Staff = require("../models/Staff");
const Recipe = require("../models/Recipe");

const getAmountBill = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const bills = await Bill.find();
      const count = bills.reduce((acc, invoice) => {
        if (invoice.isPaid) {
          const year = invoice.timeOn.getFullYear();
          if (!acc[year]) {
            acc[year] = 0;
          }
          acc[year]++;
        }
        return acc;
      }, {});

      resolve({
        status: "OK",
        message: "Lay du lieu thanh cong",
        data: count,
      });
    } catch (error) {
      reject({
        status: "ERROR",
        message: error.message,
      });
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
          if (invoice.isPaid === true) {
            acc.sales[key] += invoice.total || 0;
            acc.origin[key] += invoice.booking.priceOrigin || 0;
          }

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

const getReport = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const bill = await Bill.find().populate("booking");
      const data1 = bill.reduce(
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
          if (invoice.isPaid === true) {
            acc.sales[key] += invoice.total || 0;
            acc.origin[key] += invoice.booking.priceOrigin || 0;
          }

          return acc;
        },
        { sales: {}, origin: {} }
      );
      
      // Trích xuất dữ liệu cho tháng 5 từ đối tượng data
      const totalRevenue6 = data1.sales['2024-06'] || 0; // Tổng doanh thu trong tháng 5
      const totalImport6 = data1.origin['2024-06'] || 0; // Tổng nhập khẩu trong tháng 5
      const result = await Bill.aggregate([
        {
          $group: {
            _id: null,
            total: { $sum: "$total" }
          }
        }
      ]);

      const totalRevenue = result.length > 0 ? result[0].total : 0;
      const totalImport = Object.values(data1.origin).reduce((sum, value) => sum + value, 0);
      const totalProfit = totalRevenue - totalImport;
      const totalProfitPercent = totalRevenue !== 0 ? (totalProfit / totalRevenue) * 100 : 0;
      const totalBill = await Bill.countDocuments();
      const totalCustomer = await Customer.countDocuments();
      const averageCustomer = totalCustomer !== 0 ? totalRevenue / totalCustomer : 0;
      const totalStaff = await Staff.countDocuments();

      // Aggregate to count the number of recipes in each categoryFood
      const categoryCounts = await Recipe.aggregate([
        {
          $group: {
            _id: "$categoryFood",
            totalRecipes: { $sum: 1 }
          }
        }
      ]);

      // Define category IDs for each food type
      const appetizerCategoryId = '6654deef2ad729eb81253e35';
      const mainCourseCategoryId = '6654defa2ad729eb81253e39';
      const beverageCategoryId = '662f6c14983603fe05e044ec';
      const dessertCategoryId = '6654df0b2ad729eb81253e3e';

      // Find the counts for each category
      const appetizerCount = categoryCounts.find(item => item._id.toString() === appetizerCategoryId)?.totalRecipes || 0;
      const mainCourseCount = categoryCounts.find(item => item._id.toString() === mainCourseCategoryId)?.totalRecipes || 0;
      const beverageCount = categoryCounts.find(item => item._id.toString() === beverageCategoryId)?.totalRecipes || 0;
      const dessertCount = categoryCounts.find(item => item._id.toString() === dessertCategoryId)?.totalRecipes || 0;

      const data = {
        overview: {
          tongdoanhthu: totalRevenue,
          loinhuan: totalImport,
          loinhuantheophantram: totalProfitPercent.toFixed(2) + "%",
          tongdonhangdacungcap: totalBill,
        },
        dichvu: {
          data: [
            {
              tieuchi: 'Món khai vị',
              soluong: appetizerCount,
              donvitinh: 'Món',
            },
            {
              tieuchi: 'Món chính',
              soluong: mainCourseCount,
              donvitinh: 'Món',
            },
            {
              tieuchi: 'Thức uống',
              soluong: beverageCount,
              donvitinh: 'Món',
            },
            {
              tieuchi: 'Món tráng miệng',
              soluong: dessertCount,
              donvitinh: 'Món',
            }
          ]
        },
        doanhsobanhang: {
          data: [
            {
              tieuchi: 'Số lượng khách hàng',
              soluong: totalCustomer,
              donvitinh: 'Khách',
            },
            {
              tieuchi: 'Số lượng đơn hàng',
              soluong: totalBill,
              donvitinh: 'Đơn',
            },
            {
              tieuchi: 'Doanh thu trung bình mỗi khách hàng',
              soluong: averageCustomer.toFixed(2),
              donvitinh: 'VND',
            }
          ]
        },
        nhansu: {
          data: [
            {
              tieuchi: 'Tổng số lượng nhân viên',
              soluong: totalStaff,
              donvitinh: 'Nhân viên',
            },
            {
              tieuchi: 'Số lượng nhân viên mới',
              soluong: 0, // Placeholder value, adjust as needed
              donvitinh: 'Nhân viên',
            },
            {
              tieuchi: 'Số lượng nhân viên thôi việc',
              soluong: 0, // Placeholder value, adjust as needed
              donvitinh: 'Nhân viên',
            }
          ]
        }
      };

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
  getReport
};
