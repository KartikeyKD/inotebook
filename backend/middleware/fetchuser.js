const jwt = require("jsonwebtoken");

const JWT_SECRET = "IamGoodBoy@1";
 
const fetchuser = (req, res, next)=>{

const token = req.header('auth-token');
if(!token){
 res.status(401).send({error:"unable to Authenticate"})
}
try {
    const data = jwt.verify(token, JWT_SECRET)
    req.user=data.user;
    next()
} catch (error) {
    res.status(401).send({error:"unable to Authenticate"})
    
}

}


module.exports = fetchuser;