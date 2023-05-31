const express = require("express");
const app = express();
const PORT = process.env.PORT || 4545;

const connectDB = require("./dataConnect/MongoConnect");
const users_routes = require("./route/user");

app.get("/", (req,res) =>{
    res.send("server is online")
});

app.use("/users", users_routes );

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log(`server is online in the Port ${PORT}`);
        });
    }catch(error){
        console.log(error);
    }
    }

start();
