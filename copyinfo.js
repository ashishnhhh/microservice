const connectDB = require("./dataConnect/MongoConnect");
const data = require("./model/userSchema");
const datacopyjson = require("./copyinfo.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        await data.deleteMany();
        await data.create(datacopyjson);

        console.log("In Mongo");
    } catch (error) {
        console.log(error);
    }
};
start();
