const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const { throws } = require("assert");
const { error } = require("console");
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/microservice-api" , () => {
    console.log("mongoCompass connected");
});

require("./model/product")
const products = mongoose.model("products")

app.use(bodyParser.json());

app.post("/product",(req,res) => {
    var newProd = {
        name: 'Iphone',
        discription: 'this is an apple product',
        price: '25k'
    }

    var pro = new Pro(newProd);
    pro.save().then(() => {
        console.log("new product is created");
    }).catch((err) => {
        if(err){
            throw err;
        }
    })
    res.send("products has been created successfully")
})

app.get('/', (req,res) =>{
    res.send("this is an simple microservice project")
});

app.listen(4545, () => {
    console.log("this server is live on port : 4545");
})