const scheme = require('./schemes');


function validateRegister(body){
    return scheme.userRegScheme.validate(body);
}

function validateLogin(body){
    return scheme.userLogScheme.validate(body);
}

function validateBusiness(body) {
    return scheme.businessScheme.validate(body);
}


module.exports = {validateRegister, validateLogin, validateBusiness};
