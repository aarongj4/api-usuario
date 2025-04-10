import express from 'express';
const route = express.Router();

import usersController from '../controllers/users.js'


route.post('/', usersController.create );
route.get('/',  usersController.getAll ); 
route.get('/:id', usersController.getOne ); 
route.put('/:id', usersController.update );
route.delete('/:id', usersController.delete );

export default route;