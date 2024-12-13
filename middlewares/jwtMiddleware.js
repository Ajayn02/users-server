const jwt = require("jsonwebtoken")

const jwtmiddleware=(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(" ")[1]
        if(token){
            const val=jwt.verify(token,process.env.secretkey)
            // console.log(val);
            req.payload=val.userId
            next()
        }else{
            res.status(400).json("Invalid Token")
        }
    
    }catch(err){
        console.log(err);
        res.status(400).json(`Invalid Token , ${err}`)
    }
   
}

module.exports=jwtmiddleware