const jwt = require('jsonwebtoken');


async function authentication(req, res, next){

    const token = req.headers.token;
    if(!token) res.status(401).json('NO TOKEN -- אנא התחבר/י למערכת בכדי לבצע שינויים');

    try {
        const verify = jwt.verify(token, 'toKey');
        req.userID = verify.userID;
        next();
    } catch {
        return res.status(401).json('INVALID TOKEN -- אנא התחבר/י למערכת בכדי לבצע שינויים');
    }

}



module.exports = authentication;