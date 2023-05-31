const data = require("../model/userSchema")


const getuser = async(req,res) => {

    const getdata = await data .find(req.query);
    res.status(200).json({getuser})
};

module.exports = {getuser};