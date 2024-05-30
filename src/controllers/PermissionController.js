const PermissionService = require('../services/PermissionService')

const createPermission = async (req, res) => {
    try {
        const { name } = req.body;
        if(!name) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await PermissionService.createPermission(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
}

const updatePermission = async (req, res) => {
    try {
        const permissionId = req.params.id;
        const data = req.body;
        if(!permissionId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The permission Id is required'
            })
        }

        const response = await PermissionService.updatePermission(permissionId, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
}

const getDetail = async (req, res) => {
    try {
        const permissionId = req.params.id;

        if(!permissionId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The permission Id is required'
            })
        }

        const response = await PermissionService.getDetail(customerId);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
}

const deletePermission = async (req, res) => {
    try {
        const permissionId = req.params.id;
        // const token = req.headers;
        if(!permissionId){
            return res.status(200).json({
                status: 'ERR',
                message: 'The permission Id is required'
            })
        }

        const response = await PermissionService.deletePermission(permissionId);
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
        const response = await PermissionService.getAll( Number(limit) || 8, Number(page) || 0, sort, filter );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message : error
        })
    }
}
module.exports = {
    createPermission,
    updatePermission,
    getDetail,
    deletePermission,
    getAll

}