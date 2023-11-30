const express=require("express");
const router=express.Router();

const {create,createc}=require("../Controller/Createuser");
const {getbyid,getbyidc}=require("../Controller/Getuser");
const {update,updatec}=require("../Controller/Updateuser");
const {deleteu,deleteuc}=require("../Controller/Deleteuser");

router.post("/posts",create);
router.post("/posts/:id/comments",createc);
router.get("/posts/:id",getbyid);
router.get("/posts/:id/comments",getbyidc);
router.post("/post/:id",update);
router.post("/posts/:id/comments/:id",updatec);
router.delete("/post/:id",deleteu);

router.delete("/posts/:id/comments/:id",deleteuc);

router.delete("/posts/:id/comments/:id,deletec"):


module.exports=router;
