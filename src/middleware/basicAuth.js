const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); // Import thư viện cookie-parser
const User = require('../models/User');

const findUser = userId => {
    return User.findOne({ _id: userId }).populate('permission');
};

const verifyToken = (req, res, next) => {
    const token = localStorage.getItem('access_token'); // Lấy token từ localStorage
    if (!token) {
        return res.status(403).json('No token provided');
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json('Failed to authenticate token');
        }

        req.userId = decoded.id;
        next();
    });
};

const authUser = async (req, res, next) => {
    const userId = req.userId;
    try {
        const checkUser = await findUser(userId);
        if (!checkUser) {
            return res.status(403).json('The User is not defined');
        }
        req.user = checkUser;
        next();
    } catch (error) {
        console.error('Error authenticating user:', error);
        return res.status(500).json('Internal Server Error');
    }
};

const authPage = permissions => {
    return async (req, res, next) => {
        try {
            const user = await findUser(req.user?._id);
            if (!user || !user.permission || !user.permission.name) {
                return res.status(401).json('Người dùng hoặc quyền không hợp lệ');
            }

            const { name } = user.permission;
            if (!permissions.includes(name)) {
                return res.status(401).json('Bạn không có quyền truy cập');
            }
            next();
        } catch (error) {
            console.error('Lỗi khi xác thực trang:', error);
            return res.status(500).json('Lỗi máy chủ nội bộ');
        }
    };
};

module.exports = {
    verifyToken,
    authUser,
    authPage
};
