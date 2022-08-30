const operations = require('../../mongoose/operations');
const validation = require('../../joi/validation');




async function newBusiness(req, res){

    const result = validation.validateBusiness(req.body);
    if(result.error) return response.status(400).json(result.error.details[0].message);

    req.body.userId = req.userId; 
    const newBusiness = await operations.createBusinessInDB(req.body);
    
    if(newBusiness == null) return response.status(500).json('שגיאה כללית כרטיסיה לא נשמרה בבסיס הנתונים');
    res.json(newBusiness);
     
}




module.exports = newBusiness;