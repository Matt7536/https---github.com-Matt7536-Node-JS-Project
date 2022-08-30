const mongoose = require('mongoose');



// USER SCHEME
const userScheme = mongoose.Schema(
    
    {
     name:String,
     email:
        {
          type:String,
          unique:true
        },
     password:String,
     biz:Boolean
    }

);


//BUSINESS SCHEME
const businessScheme = mongoose.Schema(

    {
        name: String,
        description:String,
        address:String,
        phone:String,
        image:String,
        userId:String
    }
    
);




// MODELS
const userModel = mongoose.model('users', userScheme);
const businessModel = mongoose.model('businesses', businessScheme);





module.exports = {userModel, businessModel};