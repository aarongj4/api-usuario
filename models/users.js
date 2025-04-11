import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";
import User from "../schemas/users.js";
import mongoose from "mongoose";

class usersModel {


    async create(user){

        return await User.create(user);
        // const colUsers = dbClient.db.collection('users');
        // return await colUsers.insertOne(user);
    }

    async update(id, user){
        return await User.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id) }, user, { new: true } );
        // const colUsers = dbClient.db.collection('users');
        // return await colUsers.updateOne({_id : new ObjectId(id)}, {$set : user } )
    }
    async delete(id){
        return await User.findOneAndDelete({_id: new mongoose.Types.ObjectId(id) });
        // const colUsers = dbClient.db.collection('users');
        // return await colUsers.deleteOne({_id : new ObjectId(id)})
    }

    async getAll(){
        return await User.find();
        // const colUsers = dbClient.db.collection('users');
        // return await colUsers.find({}).toArray();
    }
    async getOne(id){
        return await User.findById(id);
        // const colUsers = dbClient.db.collection('users');
        // return await colUsers.findOne({_id : new ObjectId(id) });
    }

}

export default new usersModel;