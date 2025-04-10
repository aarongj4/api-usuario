import userModel from '../models/users.js';
class usersController {

    constructor() {

    }


    async create(req, res) {
        try {

            const data = userModel.create(req.body);
            res.status(201).json(data);
            
        } catch (error) {
            res.status(500).send(e);
        }
    }

    async update(req, res) {
        try {
            res.status(201).json({ status: 'ok update'})
            
        } catch (error) {
            res.status(500).send(e);
        }
    }
    
    async delete(req, res) {
        try {
            res.status(201).json({ status: 'delete ok'})
            
        } catch (error) {
            res.status(500).send(e);
        }
    }

    async getAll(req, res) {
        try {
            res.status(201).json({ status: 'ok getAll'})
            
        } catch (error) {
            res.status(500).send(e);
        }
    }

    async getOne(req, res) {
        try {
            res.status(201).json({ status: 'get one ok'})
            
        } catch (error) {
            res.status(500).send(e);
        }
    }


}

export default new usersController();