const fs=require("fs");
const data={
    "name":"please enter your name",
    "age":"please enter your age"
}
fs.writeFileSync("data.json",JSON.stringify(data)
)
console.log("program write completed")