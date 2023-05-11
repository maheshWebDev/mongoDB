const express = require('express');

const {connectToDb,getDb} = require('./config/dbConfig')

const productRoute = require('./router/productRoute');

const userRoute = require('./router/userRoute')

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(productRoute);

app.use(userRoute)
// db connection

connectToDb((err)=>{
if(!err){
    app.listen(3000,()=>{
        console.log("server is running");
    })
}
})

