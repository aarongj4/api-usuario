import userModel from '../models/users.js';
import bcrypt from 'bcrypt';


class usersController {

    constructor() {

    }



    async login(req, res) {



    }

    async create(req, res) {
        try {

            const { nombre, email, password, rol, fechaRegistro, status } = req.body;
            const usuarioExiste = await userModel.getOne({ email });

            if(usuarioExiste){
                return res.status(400).json({ error: 'El usuario ya existe' });
            }

            const passwordEncrypt = await bcrypt.hash(password, 10);


            const data = await userModel.create({
                nombre,
                email,
                password: passwordEncrypt, 
                rol,
                fechaRegistro,
                status

            });
            res.status(201).json(data);
            
        } catch (error) {
            console.log(error);
            
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