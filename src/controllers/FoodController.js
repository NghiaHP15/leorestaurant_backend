const FoodService = require('../services/FoodService')

const createFood = async (req, res) => {
    try {
        const { name, image, category, recipe } = req.body;
        if(!name || !image || !category || !recipe) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await FoodService.createFood(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
}

const updateFood = async (req, res) => {
    try {
        const categoryfoodId = req.params.id;
        const data = req.body;
        if(!categoryfoodId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The Category food id is required'
            })
        }

        const response = await CategoryFoodService.updateCategoryFood(categoryfoodId, data);
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

        const response = await CategoryFoodService.getDetail(categoryfoodId);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
}

const deleteFood = async (req, res) => {
    try {
        const categoryfoodId = req.params.id;
        // const token = req.headers;
        if(!categoryfoodId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The category food Id is required'
            })
        }

        const response = await CategoryFoodService.deleteCategoryFood(categoryfoodId);
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
        const response = await CategoryFoodService.getAll( Number(limit) || 8, Number(page) || 0, sort, filter );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
}
module.exports = {
    createFood,
    updateFood,
    getDetail,
    deleteFood,
    getAll

}