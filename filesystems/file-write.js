const fs=require("fs");
const data={
    "name":"please enter your name",
    "age":"please enter your age"
}
fs.writeFile("data.txt",JSON.stringify(data),(err)=>{
if(err){
    console.log(err)
}else{
    console.log("data write completed")
}
})
console.log("program write completed")