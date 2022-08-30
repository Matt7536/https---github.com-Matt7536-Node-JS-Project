const operations = require('../../mongoose/operations');




async function userBusinesses(req, res){

    const businesses = await operations.getAllUserBusinessesFromDB(req.userId);
    res.json(businesses);

}





module.exports = userBusinesses;