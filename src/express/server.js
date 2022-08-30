const express = require('express');
const authentication = require('./middlewares/authentication');
const register = require('./handlers/register');
const login = require('./handlers/login');
const userInfo = require('./handlers/userInfo');
const newBusiness = require('./handlers/newBusiness');
const businessByIds = require('./handlers/businessByIDs');
const updateBusiness = require('./handlers/updateBusiness');
const deleteBusiness = require('./handlers/deleteBusiness');
const userBusinesses = require('./handlers/userBusinesses');

server = express();
server.use(express.json());


// 1. יצירת משתמש חדש
server.post('/users/register', register);

// 2. התחברות וקבלת טוקן
server.post('/users/login', login);

// 3. הצגת פרטי משתמש לפי איידי
server.get('/users', authentication, userInfo);

// 4. יצירת כרטיס עסק חדש
server.post('/businesses/new', authentication, newBusiness);

// 5. הצגת כרטיס עסק ספציפי לפי איידי
server.get('/businesses/business', authentication, businessByIds);

// 6. עריכת כרטיס עסק
server.put('/businesses/business/update', authentication, updateBusiness);

// 7. מחיקת כרטיס עסק
server.delete('/businesses/business/delete', authentication, deleteBusiness);

// 8. סיפוק מערך עסקים תחת איידי משתמש מסויים
server.get('/businesses', authentication, userBusinesses);






//////////////////////////////////////////////////////////////
const models = require('../mongoose/models');



// בדיקת חיבור לשרת
server.get('', (req, res)=>{
    return res.json('Connected to LocalHost:5000');
});


// הצגת כל המשתמשים
server.get('/bypass/users', async (req, res)=>{

        const users =  await models.userModel.find();
        return res.json(users) 
        
});


// הצגת כל העסקים
server.get('/bypass/businesses', async (req, res)=>{

    const businesses = await models.businessModel.find();
    return res.json(businesses);

});
//////////////////////////////////////////////////////////////





server.listen(5000, ()=>console.log('Express status: Listening on port 5000'));