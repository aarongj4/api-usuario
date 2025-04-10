import express from "express";
import 'dotenv/config';

const app = express();

try {
    const PORT = process.env.PORT || 3000;
    app.listen( PORT, () => console.log('Servidor en puerto '+PORT ) ) ;
    
    
} catch (e) {
    console.log(e);
    
}