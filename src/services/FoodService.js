const CategoryFood = require('../models/CategoryFood')

const createCategoryFood = (newCategoryFood) => {
    return new Promise(async (resolve, reject) => {
        const { name } = newCategoryFood;
        try {
            const checkCategory = await CategoryFood.findOne({
                name: name
            })
            if(checkCategory != null) {
                resolve({
                    status: 'OK',
                    message: 'Category is already'
                })
            }
            const createdCategoryFood = await CategoryFood.create({
                name
            })
            if(createdCategoryFood){
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: createdCategoryFood
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

const updateCategoryFood = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkCategory = await CategoryFood.findOne({
                _id: id
            })

            if(checkCategory === null){
                resolve({
                    status: 'OK',
                    message: 'The category is not defined'
                })
            }

            const updatedCategoryFood = await CategoryFood.findByIdAndUpdate(id,data, {new: true})

            resolve({
                status: 'OK',
                message: 'Success',
                data: updatedCategoryFood
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
            const excludedFields = '-name'
            const categoryFood = await CategoryFood.findOne({
                _id: id
            }).populate('category',excludedFields)

            if(categoryFood === null){
                resolve({
                    status: 'OK',
                    message: 'The Category Food is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'Succees',
                data: categoryFood
            })
        }
        catch (error) {
            reject(error)
        }
    })
}

const deleteCategoryFood = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkCategory = await CategoryFood.findOne({
                _id: id
            })


            if(checkCategory === null){
                resolve({
                    status: 'OK',
                    message: 'The user is not defined'
                })
            }

            await CategoryFood.findByIdAndDelete(id)

            resolve({
                status: 'OK',
                message: 'Delete category success',
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
            const total = await CategoryFood.count()
            if(filter){
                const label = filter[0];
                const allObjectFilter =  await CategoryFood.find({
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
                const allSort =  await CategoryFood.find().limit(limit).skip(page * limit).sort({ objectSort })
                resolve({
                    status: 'OK',
                    message: 'Get all success',
                    data: allSort,
                    total: total,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(total / limit)
                })
            }
            const all =  await CategoryFood.find().limit(limit).skip(page * limit)

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
    createCategoryFood,
    updateCategoryFood,
    getDetail,
    deleteCategoryFood,
    getAll
}