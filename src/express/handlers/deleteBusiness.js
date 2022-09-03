const operations = require('../../mongoose/operations');



async function deleteBusiness(req, res){

    const userId = req.userID;
    const businessId = req.query.id;

    if(!businessId) return res.status(400).json('Please insert valid business ID');

    const business = await operations.deleteBusinessFromDB(userId, businessId);
    if(business == 1) return res.status(500).json('WARNING: You have no access to this business card');
    if(business == undefined) return res.status(500).json('No match found');
    if(business == null) return res.status(500).json('Unexpected error occurred. Please try again later');
    
    return res.json('Business card (-- id: ' + business._id + ' --) was deleted successfully');

}




module.exports = deleteBusiness;