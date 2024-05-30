const OrderService = require('../services/OrderService')

const createOrder = async (req, res) => {
    try {
        const { orderItems, name, table, status  } = req.body;
        if(!name || !orderItems || !table || !status  || orderItems.length === 0) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await OrderService.createOrder(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
}

const updateOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const data = req.body;
        if(!orderId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The Order Id is required'
            })
        }

        const response = await OrderService.updateOrder(orderId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
}

const getDetail = async (req, res) => {
    try {
        const orderId = req.params.id;

        if(!orderId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The order Id is required'
            })
        }

        const response = await OrderService.getDetail(orderId);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
}

const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        // const token = req.headers;
        if(!orderId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The order Id is required'
            })
        }

        const response = await OrderService.deleteRecipe(orderId);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await OrderService.getAll( Number(limit) || 8, Number(page) || 0, sort, filter );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
}
module.exports = {
    createOrder,
    updateOrder,
    getDetail,
    deleteOrder,
    getAll

}