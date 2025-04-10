import 'dotenv/config';
import express from "express";
import routesUsers from './routes/users.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/users', routesUsers );

try {
    const PORT = process.env.PORT || 3000;
    app.listen( PORT, () => console.log('Servidor en puerto '+PORT ) ) ;
    
    
} catch (e) {
    console.log(e);
    
}