const Order = require('../models/Order')
const Menu = require('../models/Menu')

const createOrder = (newOrder) => {
    return new Promise(async (resolve, reject) => {
        const { orderItems, name, table, status } = newOrder;
        try {
            const checkOrder = await Order.findOne({
                name: name
            })
            if(checkOrder != null) {
                resolve({
                    status: 'OK',
                    message: 'Order is already'
                })
            }

            for (const item of orderItems) {
                const { menu, amount } = item;
                if ( !menu || !amount) {
                    return res.status(400).json({ 
                        message: 'Each Order item must have menu, and amount' 
                    });
                }
    
                // Check if ingredient exists
                const existingMenu = await Menu.findById(menu);
                if (!existingMenu) {
                    return res.status(400).json({ 
                        message: 'Menu not found' 
                    });
                }
            }
            const createdOrder = await Order.create({
                name, orderItems, table, status
            })
            if(createdRecipe){
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: createdOrder
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

const updateOrder = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkOrder = await Order.findOne({
                _id: id
            })

            if(checkOrder === null){
                resolve({
                    status: 'OK',
                    message: 'The Order is not defined'
                })
            }

            const updatedOrder = await Order.findByIdAndUpdate(id,data, {new: true})

            resolve({
                status: 'OK',
                message: 'Success',
                data: updatedOrder
            })
        }
        catch (error) {
            reject(error)
        }
    })
}

const getDetail = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // const excludedFields = '-category -amount -unit -import_price -import_date -status -createdAt -updatedAt -__v'
            const order = await Order.findOne({
                _id: id
            })
            // .populate('recipeItems.ingredient',excludedFields)

            if(order === null){
                resolve({
                    status: 'OK',
                    message: 'The Order is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'Succees',
                data: order
            })
        }
        catch (error) {
            reject(error)
        }
    })
}

const deleteOrder = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkOrder = await Order.findOne({
                _id: id
            })


            if(checkOrder === null){
                resolve({
                    status: 'OK',
                    message: 'The Order is not defined'
                })
            }

            await Order.findByIdAndDelete(id)

            resolve({
                status: 'OK',
                message: 'Delete Order success',
            })
        }
        catch (error) {
            reject(error)
        }
    })
}

const getAll = (limit, page, sort, filter) => {
    return new Promise(async (resolve, reject) => {
        try {
            // const excludedFields = '-category -amount -unit -import_price -import_date -status -createdAt -updatedAt -__v'
            const total = await Order.count()
            if(filter){
                const label = filter[0];
                const allObjectFilter =  await Order.find({
                    [label]: { '$regex': filter[1]}
                }).limit(limit).skip(page * limit)
                resolve({
                    status: 'OK',
                    message: 'Get all success',
                    data: allObjectFilter,
                    total: total,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(total / limit)
                })
            }
            if(sort){
                const objectSort = {
                }
                objectSort[sort[1]] = sort[0]
                const allSort =  await Order.find().limit(limit).skip(page * limit).sort({ objectSort })
                resolve({
                    status: 'OK',
                    message: 'Get all success',
                    data: allSort,
                    total: total,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(total / limit)
                })
            }
            const all =  await Recipe.find().limit(limit).skip(page * limit)
            // .populate('recipeItems.ingredient',excludedFields)

            resolve({
                status: 'OK',
                message: 'Get all success',
                data: all,
                total: total,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(total / limit)
            })
        }
        catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    createOrder,
    updateOrder,
    getDetail,
    deleteOrder,
    getAll
}