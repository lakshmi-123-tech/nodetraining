

const jwt = require("jsonwebtoken");
 
const verify = (req, res, next)=>{
    const token = req.headers["authorization"];

    if(!token){
        return res.status(401).send("unauthorized");
    }

    try{

       const payload = jwt.verify(token, "This is my secret key");
       req.user = payload; 
    }catch(err){
        return res.status(401).send("Token is invalid");
    }
    next();
}

module.exports = verify;