const mongodb = require("mongodb");

const {getDb} = require('../config/dbConfig');

class User {
    constructor(name,email,password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    insertUser(){
        const db = getDb();
       return db.collection('users').insertOne(this) 
    }
     static findUserbyID(id){
        const db = getDb(id);
        return db.collection('users').findOne({_id:new mongodb.ObjectId(id)});
    }
}

module.exports = User