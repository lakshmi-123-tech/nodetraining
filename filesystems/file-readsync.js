const fs=require("fs");
const data=fs.readFileSync("content.txt");
console.log(data.toString());
console.log("program completed");