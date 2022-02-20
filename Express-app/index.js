const express=require("express");

const userauthroutes = require("./user/routes/user-auth-route");
const userRoute=require("./user/routes/user-routes");
const tweetRoute=require("./tweet/routes/tweet")
const bodyParser = require("body-parser");
const mongoDb= require("./config/mongodb")
const errorhandler= require("./middlewares/error-handler");

const server = express();
mongoDb.connect();
server.listen(3200,()=>{
    console.log("server is listening");
});

server.use(bodyParser.json());

server.use("/api/user/auth", userauthroutes);
server.use("/api/user/", userRoute);
server.use("/api/tweet", tweetRoute);
server.use(errorhandler);
server.get("/",(req,res)=>{
    res.end("hello from server, you are connected.");
})

