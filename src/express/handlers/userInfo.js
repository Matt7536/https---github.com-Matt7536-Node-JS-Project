const operations = require('../../mongoose/operations');



async function userInfo(req, res) {

    const user = await operations.getUserFromDB(req.userId);
    res.json(user);
    
}




module.exports = userInfo;