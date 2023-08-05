const jwt = require('jsonwebtoken');

const generateToken=(id)=>{
    return jwt.sign({id},"gagan",{
        expiresIn:"30d",
    })
}

module.exports=generateToken
