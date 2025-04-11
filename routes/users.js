import express from 'express';
const route = express.Router();

import usersController from '../controllers/users.js'

route.post('/login', usersController.login );

route.post('/', usersController.create );
route.get('/',  usersController.getAll ); 
route.get('/:id', usersController.getOneById ); 
route.put('/:id', usersController.update );
route.delete('/:id', usersController.delete );

export default route;