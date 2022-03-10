const express=require("express");
const app=express();
const PORT= process.env.PORT || 5000;
const cors=require("cors");

const userRouter=require("./routes/userRouter");
const foodRouter=require("./routes/foodRouter"); 
require("dotenv").config();
const connectDB=require("./config/db");
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.static("build")); //load the front-end from public folder
app.use(express.urlencoded({ extended: false }));
app.use("/users",userRouter);
app.use("/foods",foodRouter);
app.get("/",(req,res)=>{
    res.send("Food Recipe App Server");
})

app.listen(PORT,()=>{
    console.log(`Server Started listening at Port :${PORT}`);
})
