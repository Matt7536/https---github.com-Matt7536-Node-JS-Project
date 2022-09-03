const operations = require('../../mongoose/operations');
const validation = require('../../joi/validation');




async function updateBusiness(req, res){

    const result = validation.validateBusiness(req.body);
    if(result.error) return res.status(400).json(result.error.details[0].message);

    const businessId = req.query.id; 
    const userId = req.userID;

    if(!businessId) return res.status(400).json('Please insert valid business ID');
    
    const updatedBusiness = await operations.updateBusinessInDB(userId, businessId, req.body);
    
    if(updatedBusiness == 1) return res.status(500).json('WARNING: You have no access to this business card');
    if(updatedBusiness == undefined) return res.status(500).json('No match found');
    if(updatedBusiness == null) return res.status(500).json('Unexpected error occurred. Please try again later');
    return res.json(updatedBusiness);
    
}





module.exports = updateBusiness;