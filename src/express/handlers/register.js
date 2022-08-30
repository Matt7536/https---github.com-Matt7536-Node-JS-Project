const operations = require('../../mongoose/operations');
const validation = require('../../joi/validation');



async function register(req, res){
    
    const {error} = validation.validateRegister(req.body);
    if(error) return res.status(400).json(error.details[0].message);

    const newser = await operations.createUserInDB(req.body);
    if (newser == null) return res.status(500).json('Unexpected error occures. Please try again later');

    return res.json({id:newser._id, name: newser.name, email:newser.email});

}



module.exports = register;