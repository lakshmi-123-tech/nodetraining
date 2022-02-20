const fs = require('fs');

const handler = (error, req, res, next )=>{

    fs.appendFileSync("./logs/errorLog.txt", error.toString()+"\n"+error.stack.toString());
    res.send("server error occured please contact support")
}

module.exports= handler;