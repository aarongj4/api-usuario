import dbClient from "../config/dbClient.js";

class usersModel {


    async create(user){

        const colUsers = dbClient.db.collection('users');
        await colUsers.insertOne(user);
    }

}

export default new usersModel;