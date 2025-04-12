import userModel from '../models/users.js';
import bcrypt from 'bcrypt';
import { validarPassword } from '../utils/validarPassword.js';
import jsonwebtoken from 'jsonwebtoken';
import { generarToken } from '../services/jwt.js';

class usersController {

    constructor() {

    }



    async login(req, res) {

        const { email, password } = req.body;

        const usuarioExiste = await userModel.getOne({ email });

        if (!usuarioExiste) {
            return res.status(400).json({ error: 'El usuario no existe' });
        }
        

        const passwordValid = await bcrypt.compare(password, usuarioExiste.password);
        if (!passwordValid) {

            return res.status(400).json({ error: 'Credenciales incorrectas' });
        }

        
        const token = generarToken(email, usuarioExiste.rol);

        return res.status(200).json({ msg: 'Usuario autenticado.', token })
    }

    async create(req, res) {
        try {

            const { nombre, email, password, rol, fechaRegistro, status } = req.body;
            const usuarioExiste = await userModel.getOne({ email });

            if (usuarioExiste) {
                return res.status(400).json({ error: 'El usuario ya existe' });
            }

            const error = validarPassword(password);
            if (error) {
                return res.status(400).json({ error });
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

            res.status(500).send(error);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const updateData = { ...req.body };
    
            if (updateData.password) {
                const error = validarPassword(updateData.password);
                if (error) {
                    return res.status(400).json({ error });
                }
    
                updateData.password = await bcrypt.hash(updateData.password, 10);
            }
    
            const data = await userModel.update(id, updateData);
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
            res.status(200).json(data);

        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getOne(req, res) {
        try {

            const { id } = req.params;
            const data = await userModel.getOne(id);
            res.status(200).json({ data })

        } catch (error) {
            res.status(500).send(error);
        }
    }
    async getOneById(req, res) {
        try {

            const { id } = req.params;
            const data = await userModel.getOneByID(id);
            res.status(200).json({ data })

        } catch (error) {
            res.status(500).send(error);
        }
    }


}

export default new usersController();