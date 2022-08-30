const operations = require('../../mongoose/operations');
const validation = require('../../joi/validation');
const jwt = require('jsonwebtoken');


async function login (req, res){

    const {error} = validation.validateLogin(req.body);
    if(error) return res.status(400).json(error.details[0].message);

    const {email, password} = req.body;
    const doesExist = await operations.validateUserInDB(email, password);

    if(!doesExist) return res.status(500).json('no match found; please check your input');
    if(doesExist == null) return res.status(500).json('Unexpested error occured. Please try again later');

    const token = jwt.sign(
        {
            userId:doesExist._id,
            isBusinessAccount:doesExist.biz
        }, 'toKey'); //  יצירת טוקן ייחודי המשוייך לנתון נוסף - איידי משתמש - ומוגדר תחת התגית מייקי

    return res.json(token);

}





module.exports = login;