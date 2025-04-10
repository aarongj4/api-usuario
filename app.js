import express from "express";
import 'dotenv/config';
import routesUsers from './routes/users.js';

const app = express();

app.use('/users', routesUsers );

try {
    const PORT = process.env.PORT || 3000;
    app.listen( PORT, () => console.log('Servidor en puerto '+PORT ) ) ;
    
    
} catch (e) {
    console.log(e);
    
}