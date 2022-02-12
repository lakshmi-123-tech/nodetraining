const fs=require("fs");
const data={
    "name":"please enter your name",
    "age":"please enter your age"
}
fs.appendFileSync("content.txt",JSON.stringify(data))
console.log("file appendes")