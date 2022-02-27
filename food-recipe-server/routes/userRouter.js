const express=require("express");
const router=express.Router();
const {userLogin,userRegister,userProfile, updateProfile}=require("../controller/userController")
const {protect,validUser}=require("../middleware/authMiddleware");

router.post("/register",userRegister);
router.post("/login",userLogin);
router.get("/profile",protect,userProfile);
router.post("/updateProfile/:userId",protect,validUser,updateProfile);












module.exports=router;