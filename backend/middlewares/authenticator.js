const jwt = require("jsonwebtoken");

const auth=(req,res,next)=>{
    const token=req.headers.authorization;
    if(token){
       const decoded=jwt.verify(token,process.env.key)
       if(decoded){
        const userID=decoded.userID;
        req.body.userID=userID;
        next()
       }else {
        res.send({'msg':'Please Login as Admin First'})
       }
    }else{
        res.send({'msg':'Please Login as Admin First'})
    }
}
module.exports={auth}