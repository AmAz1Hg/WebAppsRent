/*
const {Type} = require('../models/models')
const ApiError = require('../error/apiError');

class TypeContr {
    async create(req, res) {
        const {numberRooms} = req.body
        const type = await Type.create({numberRooms})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

}

module.exports = new TypeContr()

*/