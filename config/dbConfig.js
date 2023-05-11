const { MongoClient } = require('mongodb');

let dbConnection 

module.exports = {
    connectToDb : (cb)=>{
        MongoClient.connect('mongodb+srv://maheshb02:MvqhVVjeHOVFfpo7@cluster0.iegcgby.mongodb.net/shop?retryWrites=true&w=majority')
        .then((client)=>{
            console.log(" DB connected")
            dbConnection = client.db()
            return cb()
        }).catch((err)=>{ 
            console.log(err);
            return cb(err)
        })
    },

    getDb :()=> dbConnection
}