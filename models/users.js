import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class usersModel {


    async create(user){

        const colUsers = dbClient.db.collection('users');
        return await colUsers.insertOne(user);
    }

    async update(id, user){
        const colUsers = dbClient.db.collection('users');
        return await colUsers.updateOne({_id : new ObjectId(id)}, {$set : user } )
    }
    async delete(id){
        const colUsers = dbClient.db.collection('users');
        return await colUsers.deleteOne({_id : new ObjectId(id)})
    }

    async getAll(){
        const colUsers = dbClient.db.collection('users');
        return await colUsers.find({}).toArray();
    }
    async getOne(id){
        const colUsers = dbClient.db.collection('users');
        return await colUsers.findOne({_id : new ObjectId(id) });
    }

}

export default new usersModel;