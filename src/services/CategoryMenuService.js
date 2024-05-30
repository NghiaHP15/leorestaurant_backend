const CategoryMenu = require('../models/CategoryMenu')

const createCategoryMenu = (newCategoryMenu) => {
    return new Promise(async (resolve, reject) => {
        const { name } = newCategoryMenu;
        try {
            const checkCategory = await CategoryMenu.findOne({
                name: name
            })
            if(checkCategory != null) {
                resolve({
                    status: 'OK',
                    message: 'Category is already'
                })
            }
            const createdCategoryMenu = await CategoryMenu.create({
                name
            })
            if(createdCategoryMenu){
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: createdCategoryMenu
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

const updateCategoryMenu = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkCategory = await CategoryMenu.findOne({
                _id: id
            })

            if(checkCategory === null){
                resolve({
                    status: 'OK',
                    message: 'The category is not defined'
                })
            }

            const updatedCategoryMenu = await CategoryMenu.findByIdAndUpdate(id,data, {new: true})

            resolve({
                status: 'OK',
                message: 'Success',
                data: updatedCategoryMenu
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
            const categoryMenu = await CategoryMenu.findOne({
                _id: id
            })

            if(categoryMenu === null){
                resolve({
                    status: 'OK',
                    message: 'The Category Menu is not defined'
                })
            }

            resolve({
                status: 'OK',
                message: 'Succees',
                data: categoryMenu
            })
        }
        catch (error) {
            reject(error)
        }
    })
}

const deleteCategoryMenu = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkCategory = await CategoryMenu.findOne({
                _id: id
            })


            if(checkCategory === null){
                resolve({
                    status: 'OK',
                    message: 'The category is not defined'
                })
            }

            await CategoryMenu.findByIdAndDelete(id)

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
            const total = await CategoryMenu.count()
            if(filter){
                const label = filter[0];
                const allObjectFilter =  await CategoryMenu.find({
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
                const allSort =  await CategoryMenu.find().limit(limit).skip(page * limit).sort({ objectSort })
                resolve({
                    status: 'OK',
                    message: 'Get all success',
                    data: allSort,
                    total: total,
                    pageCurrent: Number(page + 1),
                    totalPage: Math.ceil(total / limit)
                })
            }
            const all =  await CategoryMenu.find().limit(limit).skip(page * limit)

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
    createCategoryMenu,
    updateCategoryMenu,
    getDetail,
    deleteCategoryMenu,
    getAll
}