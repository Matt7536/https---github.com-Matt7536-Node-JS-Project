const operations = require('../../mongoose/operations');

async function businessByIDs(req, res) {

    const userId = req.userID;
    const businessId = req.query.id;

    if(!businessId) return res.status(400).json('Please insert valid business ID');

    const business = await operations.getBusinessFromDB(userId, businessId);
    if(business == undefined) res.status(500).json('No match found');
    if(business == null) res.status(500).json('Unexpected error occurred. Please try again later');
    res.json(business);

}

module.exports = businessByIDs;