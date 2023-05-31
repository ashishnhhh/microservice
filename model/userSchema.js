const mongoose = require("mongoose");

const dataschema = new mongoose.Schema({

    FirstName:{
        type:String,
        required:true
    },

    LastName:{
        type:String,
        required:true
    },

    Age:{
        type:String,
        required:true
    },

   Hobbies:{type:Array,required:true[{type:String, required:true},{type:String, rrquired:true}]},

   Friends:{
        type:Array,
        required:true
            [{
                FirstName:{type:String, required:true},
                LastName:{type:String, required:true}
            },
            {
                FirstName:{type:String, required:true},
                LastName:{type:String, required:true}
            },
            {
                FirstName:{type:String, required:true},
                LastName:{type:String, required:true}
            }]
    },

    Academics:{
             type:Array,
             required:true
             [{
                Secondary_Education:{type:String, required:true},
                Diploma:{type:String, required:true},
                Degree:{type:String, required:true},
                CollegeId:{type:String, required:true},
                Branch:{type:String, required:true}
             }]
    },
   
     Skills:{
             type:Array,
             required:true
            [
                {type:String, required:true},
                {type:String, required:true},
                {type:String, required:true},
                {type:String, required:true}
            ]}

   
});

module.exports = mongoose.model("data",dataschema);