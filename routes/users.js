import express from 'express';
const route = express.Router();

import usersController from '../controllers/users.js'
import { verificarToken } from '../helpers/autenticacion.js';

route.post('/login', usersController.login );

route.post('/', usersController.create );
route.get('/',  usersController.getAll ); 
route.get('/:id', usersController.getOneById ); 
route.put('/:id', verificarToken, usersController.update );
route.delete('/:id', verificarToken, usersController.delete );

export default route;