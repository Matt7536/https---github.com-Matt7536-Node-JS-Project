const operations = require('../../mongoose/operations');
const validation = require('../../joi/validation');




async function updateBusiness(req, res){

    const result = validation.validateBusiness(req.body);
    if(result.error) return response.status(400).json(result.error.details[0].message);

    const businessId = req.query.businessid; 
    const userId = req.userID;

    if(!businessId) return res.status(400).json('לא סופק מזהה עסק');
    
    const updatedBusiness = await operations.updateBusinessInDB(businessId, userId, req.body);
    if(updatedBusiness == undefined) return res.status(500).json('No match found')
    if(updatedBusiness == null) return res.status(500).json('Unexpected error accured. Please try again');
    return res.json(updatedBusiness);
    
}





module.exports = updateBusiness;