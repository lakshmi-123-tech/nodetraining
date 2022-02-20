const express=require("express")
const userController=require("../controllers/user")
const router=express.Router()

router.put('/',userController.update)
router.get('/:id',userController.getById)
router.delete('/:id',userController.delete)

module.exports=router;