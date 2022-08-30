const models = require('../mongoose/models');
const bcryptjs = require('bcryptjs');




// 1. יצירת משתמש חדש
async function createUserInDB(userObject) {

    try { 
        userObject.password = bcryptjs.hashSync(userObject.password);
        const newUser = await new models.userModel(userObject).save();
        return newUser;
    } catch {
        return null;
    }

}



// 2. התחברות וקבלת טוקן
async function validateUserInDB(email, password) {

    try {
        const user = await models.userModel.findOne({email:email});
        if (user){
            const pass = bcryptjs.compareSync(password, user.password);
            if(pass) return user;
            return undefined;
        }
        return undefined;
    } catch {
        return null;
    }

}



// 3. הצגת פרטי משתמש לפי איידי
async function getUserFromDB(id) {

    try {
        const user = await models.userModel.findById(id);
        return user;
    } catch {
        return null;
    }

}



// 4. יצירת כרטיס עסק חדש
async function createBusinessInDB(businessObject) {
    
    try { 
        const user = await new models.businessModel(businessObject).save();
        return user;
    } catch {
        return null;
    }

}



// 5. הצגת כרטיס עסק ספציפי לפי איידי
async function getBusinessFromDB(userID, businessID) {

    try{
        const business = await models.businessModel.find(
            {
              _id: businessID,
              userId: userID
            }
        );
        if(business) return business;
        return undefined;
      }
      catch {
        return null;
      }
        
}



// 6. עריכת כרטיס עסק
async function updateBusinessInDB(userId, businessId, updatedBusinessObject) {

    try {
        const business = await models.businessModel.findOne({_id:businessId, userId:userId});
        if (business) return await models.businessModel.findByIdAndUpdate(businessId, updatedBusinessObject);
        return undefined;
    } catch {
        return null;
    }
}



// 7. מחיקת כרטיס עסק
async function deleteBusinessFromDB(userId, businessId) {

    try {
        const business = await models.businessModel.findOne({_id:businessId, userId:userId});
        if (business) {
            await models.businessModel.findByIdAndDelete(businessId);
            return business;
        }
        return undefined;
    } catch {
        return null;
    }

}



// 8. סיפוק מערך עסקים תחת איידי משתמש מסויים
async function getAllUserBusinessesFromDB(id) {

    try {
        const businesses = await models.businessModel.find({userId:id});
        if (businesses) return businesses; 
        return undefined;
    } catch {
        return null;
    }

}






module.exports = {createUserInDB, validateUserInDB, getUserFromDB, createBusinessInDB, getBusinessFromDB, updateBusinessInDB, deleteBusinessFromDB, getAllUserBusinessesFromDB};