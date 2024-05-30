const CategoryMenuService = require('../services/CategoryMenuService')

const createCategoryMenu = async (req, res) => {
    try {
        const { name } = req.body;
        if(!name) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The name is required'
            })
        }
        const response = await CategoryMenuService.createCategoryMenu(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
}

const updateCategoryMenu = async (req, res) => {
    try {
        const categoryfoodId = req.params.id;
        const data = req.body;
        if(!categoryfoodId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The Category menu id is required'
            })
        }

        const response = await CategoryMenuService.updateCategoryMenu(categoryfoodId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
}

const getDetail = async (req, res) => {
    try {
        const categoryfoodId = req.params.id;

        if(!categoryfoodId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The category food id is required'
            })
        }

        const response = await CategoryMenuService.getDetail(categoryfoodId);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
}

const deleteCategoryMenu = async (req, res) => {
    try {
        const categorymenuId = req.params.id;
        // const token = req.headers;
        if(!categorymenuId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The category menu Id is required'
            })
        }

        const response = await CategoryMenuService.deleteCategoryMenu(categoryfoodId);
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
        const response = await CategoryMenuService.getAll( Number(limit) || 8, Number(page) || 0, sort, filter );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
}
module.exports = {
    createCategoryMenu,
    updateCategoryMenu,
    getDetail,
    deleteCategoryMenu,
    getAll

}