const User=require("../models/user");
const jwt=require("jsonwebtoken");

const protect=async(req,res,next)=>{
    let token;
    if(req.headers.authorization&&req.headers.authorization.startsWith("Bearer")){
         token=req.headers.authorization.split(" ")[1];
        const decode= jwt.verify(token,process.env.JWT_SECRET);
        const userId=decode.userId;
        const user=await User.findById(userId);
        if(user){
            return next();
        }else{
            res.status(400).json({
                message:"Not Authorized"
            })
        }
    }
}

module.exports=protect;