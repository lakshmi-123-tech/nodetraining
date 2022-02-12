const express=require("express");
const server=express();
server.listen(3200,()=>{
    console.log("server is listening")
})
server.get("/",(req,res)=>{
    res.end("hello from server, you are connected")
})