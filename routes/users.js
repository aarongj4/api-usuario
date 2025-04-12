import express from 'express';
const route = express.Router();

import usersController from '../controllers/users.js'
import { permitirRoles, verificarToken } from '../helpers/autenticacion.js';

route.post('/login', usersController.login );

route.get('/',  verificarToken, permitirRoles('admin'), usersController.getAll ); 
route.get('/:id', verificarToken, permitirRoles('admin', 'user'), usersController.getOneById ); 
route.post('/', verificarToken, permitirRoles('admin', 'user'), usersController.create );
route.put('/:id', verificarToken, permitirRoles('admin', 'user'), usersController.update );
route.delete('/:id', verificarToken, permitirRoles('admin'), usersController.delete );

export default route;