const operations = require('../../mongoose/operations');

async function businessByIDs(req, res) {

    const userId = req.userId;
    const businessId = req.query.businessId;

    if(!cardId) return res.status(400).json('לא סופק מזהה עסק');

    const business = await operations.getBusinessFromDB(userId, businessId);
    if(business == undefined) res.status(500).json('No match found');
    if(business == null) res.status(500).json('Unexpected error accured. Please try again');
    res.json(business);

}

module.exports = businessByIDs;