import userModel from '../models/users.js';
class usersController {

    constructor() {

    }


    async create(req, res) {
        try {

            const data = await userModel.create(req.body);
            res.status(201).json(data);
            
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await userModel.update(id, req.body );
            res.status(200).json(data);
            
        } catch (error) {
            res.status(500).send(error);
        }
    }
    
    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await userModel.delete(id);
            res.status(200).json(data);

            // res.status(206).json({ status: 'delete ok'})
            
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getAll(req, res) {
        try {


            const data = await userModel.getAll();
            res.status(201).json(data);
            
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getOne(req, res) {
        try {

            const { id } = req.params;
            const data = await userModel.getOne(id);
            res.status(201).json({ data})
            
        } catch (error) {
            res.status(500).send(error);
        }
    }


}

export default new usersController();