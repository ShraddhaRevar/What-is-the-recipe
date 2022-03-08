const express=require("express");
const router=express.Router();
const {getRecipes,addRecipe,deleteRecipe,updateRecipe,getRecipe}=require("../controller/foodController");
const {protect,validUser}=require("../middleware/authMiddleware");

router.get("/:userId",protect,validUser,getRecipes);


router.post("/:userId",protect,validUser,addRecipe);


router.delete("/:userId/:foodId",protect,deleteRecipe);


router.get("/:userId/:foodId",protect,getRecipe);


router.post("/:userId/:foodId",protect,validUser,updateRecipe);

module.exports=router;