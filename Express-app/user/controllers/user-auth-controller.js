const UserModel= require("../models/user");
const repo = require("../repositories/user");
const jwt= require("jsonwebtoken");
exports.register = (req, res)=>{
    // console.log("This is register request");
    // console.log(req.url);
    // console.log(req.body);
    const newUser= new UserModel(req.body.name,req.body.email,
        req.body.password,req.body.gender);
        repo.add(newUser, ()=>{
            res.send("Data is Added");
        })
    // res.send("This is register");
}

exports.login = (req, res)=>{
   const email=req.body.email;
   const password=req.body.password;
   repo.getByEmail(email,(record)=>{
    if(!record){
        res.status(400).send("Invalid Email");
    }
    if(record.password==password){
        const token = jwt.sign({
            _id: record._id,
            email: record.email
        },
        "This is my secret key",
        {
            expiresIn: '2h'
        }
        );
        record.token=token;
        record.password=null;
        const response={
          _id:record._id,
          email:record.email,
          token:record.token
            
        }
        res.status(200).send(response);
    }else{
        res.status(400).send("Invalid Password");
    }
   })
   
}