const { ObjectId } = require("mongodb");
const db = require("../../config/mongodb");

getCollection=()=>{
   return db.getCollection("user"); 
}
exports.add = (model, cb)=>{
    getCollection().insertOne({name: model.name, email: model.email, password: model.password, gender: model.gender})
        .then(()=>{
            cb();
        },
        err=>{throw new Error(err);})
}
exports.update=(model,cb)=>{
    

  
    const filter={_id:ObjectId(model._id)}
    const update={ $set: {name: model.name, password: model.password, 
        gender: model.gender} };

        getCollection().findOneAndUpdate(filter,update)
        .then(()=>{
            cb()
        },
        err=>{console.log(err)})
        
}
exports.getById=(id,cb)=>{
    
    getCollection().findOne({_id: ObjectId(id)})
    .then((user=>{cb(user),
    (err)=>{
        console.log(err)
    }}));
}
exports.delete=(id,cb)=>{
    
    getCollection().deleteOne({_id: ObjectId(id)})
    .then(()=>{cb(),
    (err)=>{
        console.log(err)
    }});
}
exports.getByEmail=(email,cb)=>{
    getCollection().findOne({email})
    .then((record)=>{
        cb(record)},
        (err)=>{
            console.log(err)
        }
    );
}