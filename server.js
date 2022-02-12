const http=require("http");
//create server
http.createServer((req,res)=>{
    res.end("hello from nodejs server");
}).listen(3200);
console.log("server is listening on 3200...");
