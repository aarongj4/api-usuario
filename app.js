import 'dotenv/config';
import express from "express";
import routesUsers from './routes/users.js';
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';

const app = express();

import swaggerUI from 'swagger-ui-express';
import swaggerDocumentation from './swagger.json' with { type: 'json' };





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocumentation) );
app.use('/users', routesUsers );

try {
    const PORT = process.env.PORT || 3000;
    app.listen( PORT, () => console.log('Servidor en puerto '+PORT ) ) ;
    
    
} catch (e) {
    console.log(e);
    
}

process.on('SIGINT', async () => {
    dbClient.cerrarConexion();
    process.exit();
})