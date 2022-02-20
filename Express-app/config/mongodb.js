const mongoDBClient=require("mongodb").MongoClient;
 
const url="mongodb+srv://prasannakasireddy:lucky@cluster0.gwifs.mongodb.net/twitterApp?retryWrites=true&w=majority"

var dbClient;
exports.connect=()=>{
    mongoDBClient.connect(url)
    .then(
        (client)=>{
            dbClient=client;
            console.log("mongo db connected");
        },
        (err)=>{
            console.log(err)
        }
    )
}
exports.getCollection = (name)=>{
    return dbClient.db("twitterApp").collection(name);
}