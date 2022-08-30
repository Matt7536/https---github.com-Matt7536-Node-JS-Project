const operations = require('../../mongoose/operations');



async function deleteBusiness(req, res){

    const userId = req.userID;
    const businessId = req.query.businessId;

    if(!businessId) return res.status(400).json('אנא הכנס מזהה עסק למחיקה');

    const business = await operations.deleteBusinessFromDB(userId, businessId);
    if(business == undefined) return res.status(500).json('No match found to delete or that you have no access to this business card');
    if(business == null) return res.status(500).json('Unexpected error accured. Please try again later');
    
    return res.json(business + ' was deleted successfully');

}




module.exports = deleteBusiness;