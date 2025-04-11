import 'dotenv/config';
import { MongoClient } from "mongodb";
import mongoose from 'mongoose';


class dbClient {

    constructor(){
        this.conectarBaseDatos();
    }

    async conectarBaseDatos() {
        
        // this.client = new MongoClient(uri);
        // this.conectarBD();
        const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/usersDB?retryWrites=true&w=majority`;
        await mongoose.connect(uri);
    }

    async cerrarConexion() {

        try {
            await mongoose.disconnect();
            console.log('conexion cerrada');
            
        } catch (error) {
            console.log(error);
            
        }

    }



    // async conectarBD() {

    //     try {
            
    //         await this.client.connect();
    //         this.db = this.client.db('usersDB');
    //         console.log('conectado a mongo');
            

    //     } catch (error) {
    //         console.log(error);
            
            
    //     }

    // }
}

export default new dbClient();