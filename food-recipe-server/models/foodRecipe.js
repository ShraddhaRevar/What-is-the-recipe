const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const foodSchema=new Schema({
    recipeName:{
        type:String,
        required:true
    },
    procedure:{
        type:String,
        default:"Finally your dish is ready"
    },
    ingredient:{
        type:Array,
        of:String
    },
    foodImage:{
        type:String,
        default:"https://images.unsplash.com/photo-1616607238884-197998dbcecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
    },
    videoLink:{
        type:String,
        default:"https://www.youtube.com/results?search_query=mutton+biryani"
    },
    user:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
})
const Recipe=mongoose.model("Food",foodSchema);
module.exports=Recipe;