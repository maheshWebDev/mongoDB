const express = require('express');

const mongoose = require('mongoose')

const productRoute = require('./router/productRoute');

const userRoute = require('./router/userRoute')

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(productRoute);

app.use(userRoute)
// db connection



mongoose.connect('mongodb+srv://maheshb02:MvqhVVjeHOVFfpo7@cluster0.iegcgby.mongodb.net/shop?retryWrites=true&w=majority')
.then(()=>{
    console.log("DB is connected");
    app.listen(3000,()=>{
                console.log("server is running");
            })
}).catch((err)=>{
    console.log(err)
})