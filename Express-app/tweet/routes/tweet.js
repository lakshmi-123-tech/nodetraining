const express=require("express")
const tweetController= require("../controllers/tweet")
const isauthorized=require("../../middlewares/auth")
const router=express.Router()

router.post("/",isauthorized,tweetController.postTweet)

module.exports=router;