const express=require("express");
const router=express.Router();
const {getRecipes,addRecipe,deleteRecipe,updateRecipe}=require("../controller/foodController");
const protect=require("../middleware/authMiddleware");

router.get("/:userId",protect,getRecipes);


router.post("/:userId",protect,addRecipe);


router.get("/:userId/:foodId",protect,deleteRecipe);
router.post("/:userId/:foodId",protect,updateRecipe);

module.exports=router;