const joi = require('joi');



const userRegScheme = joi.object(
    {
        name:joi.string().required(),
        email:joi.string().required().email().lowercase(),
        password:joi.string().required().min(6),
        biz:joi.boolean().required()
    }
);


const userLogScheme = joi.object(
    {
        email:joi.string().required().email().lowercase(),
        password:joi.string().required()
    }
);


const businessScheme = joi.object(
    {
        name: joi.string().required().min(5).max(255),
        description: joi.string().required().min(15).max(255),
        address: joi.string().required().min(20).max(255),
        phone: joi.string().required().min(9).max(20),
        image: joi.string().required().min(20).max(500)
    }
);





module.exports = {userRegScheme, userLogScheme, businessScheme};
