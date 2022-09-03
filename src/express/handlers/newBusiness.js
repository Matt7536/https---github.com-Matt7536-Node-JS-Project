const operations = require('../../mongoose/operations');
const validation = require('../../joi/validation');




async function newBusiness(req, res){

    const result = validation.validateBusiness(req.body);
    if(result.error) return res.status(400).json(result.error.details[0].message);

    req.body.userId = req.userID; 
    const newBusiness = await operations.createBusinessInDB(req.body);
    
    if(newBusiness == null) return response.status(500).json('Unexpected error occurred. Please try again later');
    res.json(newBusiness);
     
}




module.exports = newBusiness;