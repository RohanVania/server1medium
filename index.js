import express from "express";
import cors from "cors";



const app=express();

app.use(cors());

app.get("/",(req,resp)=>{
    return resp.json({
        msg:"Hello from Server 2",
    })
})

app.listen(3001,()=>{
    console.log("Server 1 running at localhost :", 3001);
})