const express=require("express");
const server = express();
const userauthroutes = require("./user/routes/user-auth-route");

server.listen(3200,()=>{
    console.log("server is listening");
});

server.use("/api/user/auth", userauthroutes);

server.get("/",(req,res)=>{
    res.end("hello from server, you are connected.");
})

