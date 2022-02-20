const userModel=require("../models/user")
const repo= require("../repositories/user")

exports.update=(req,res)=>{
    const usertoUpdate= new userModel(req.body.name, req.body.email, req.body.password, 
        req.body.gender, req.body.id);
        repo.update(usertoUpdate,()=>{
            console.log("Data is updated");
        })
}
exports.getById=(req,res)=>{
 const id=req.params.id;
 repo.getById(id,(user)=>{
     res.status(200).send(user)
 })
}
exports.delete=(req,res)=>{
    const id=req.params.id;
    repo.delete(id,()=>{

        res.status(200).send("user deleted")
    })
   }