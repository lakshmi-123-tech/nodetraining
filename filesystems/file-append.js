const fs=require("fs");
const data={
    "name":"please enter your name",
    "age":"please enter your age"
}
fs.appendFile("content.txt",JSON.stringify(data),(err)=>{
if(err){
    console.log(err)
}else{
    console.log("file updated");
}
})