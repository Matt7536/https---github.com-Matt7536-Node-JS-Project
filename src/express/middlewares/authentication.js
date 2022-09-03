const jwt = require('jsonwebtoken');


async function authentication(req, res, next){

    const token = req.headers.token;
    if(!token) res.status(401).json('NO TOKEN -- Please login to get access');

    try {
        const verify = jwt.verify(token, 'toKey');
        req.userID = verify.userId;
        next();
    } catch {
        return res.status(401).json('INVALID TOKEN -- please login to get access');
    }

}



module.exports = authentication;