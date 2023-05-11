const mongodb = require('mongodb')
const {getDb} = require('../config/dbConfig')

class Product {
    constructor(title,price,description){
        this.title = title;
        this.price = price;
        this.description = description
    }
    save(){
        let db = getDb();
        db.collection('products').insertOne(this)
        .then((doc)=>{
            console.log(doc)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    static async fetchAll(){
        let db = getDb()
      let doc = await db.collection('products').find().toArray()
      return doc
    }

    static async fetchById (id){
        let db = getDb()
        console.log(id)
       let product = await  db.collection('products').findOne({_id: new mongodb.ObjectId(id)});
       console.log(product)
       return product
      
    }

    static async update(id,obj){
      let db = getDb();
     let doc = await db.collection('products').updateOne({_id: new mongodb.ObjectId(id)},{$set:{title:obj.title,price:obj.price}})
     console.log(doc);
     return doc
    }

    static async delete (id){
        let db = getDb();
       let doc = await db.collection("products").deleteMany({_id:new mongodb.ObjectId(id)})
       console.log(doc);
       return doc
    }
}

module.exports = Product;