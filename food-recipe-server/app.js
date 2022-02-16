const express=require("express");
const app=express();
const PORT=5000;
require("dotenv").config();
const connectDB=require("./config/db");
connectDB();

app.get("/",(req,res)=>{
    res.send("Food Recipe App Server");
})

app.listen(PORT,()=>{
    console.log(`Server Started listening at Port :${PORT}`);
})
