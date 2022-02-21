const express=require("express");
const router=express.Router();
const {userLogin,userRegister,userProfile}=require("../controller/userController")
const protect=require("../middleware/authMiddleware");

router.get("/register",userRegister);
router.get("/login",userLogin);
router.get("/profile",protect,userProfile);












module.exports=router;