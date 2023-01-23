const express = require("express");
const adminRouter = express.Router();
adminRouter.use(express.json());

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { AdminModel } = require("../models/admin.model");

adminRouter.post("/signup", async (req, res) => {
  let { name, email, password, specialkey } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        console.log("err");
      } else {
        if (specialkey === "admin" &&(name!=="" && email !=="" && password!=="")) {
          const user = new AdminModel({
            name,
            email,
            password: hash,
            specialkey,
          });
          await user.save();
          res.send({ msg: "Admin Signup Successfull",name:name });
        } else if(specialkey==="" || name==="" || email ==="" || password===""){
          res.send({ msg: "Fill All Details"});
        } else {
          res.send({ msg: "Wrong Key"});
        }
      }
    });
  } catch (e) {
    console.log("Err", e);
  }
});

adminRouter.post("/signin", async (req, res) => {
  let { email, password } = req.body;
  var name;
  try {
    const user = await AdminModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, process.env.key);
          res.send({ msg: "Admin Signin Successful",token:token,name:user[0].name });
        } else {
          res.send({msg:"Wrong Credentials"});
        }
      });
    } else {
      res.send({msg:"Wrong Credentials"});
    }
  } catch (e) {
    console.log("Err", e);
    res.send({msg:"Wrong Credentials"});
  }
});

adminRouter.get("/all",async(req,res)=>{
  try{
    const admin=await AdminModel.find()
    res.send(admin)
  }catch(e){
    console.log('err',e);
    
  }
})

adminRouter.delete("/delete/:id",async(req,res)=>{
  try{
    await AdminModel.findByIdAndDelete({_id:req.params.id})
    res.send("Deleted")
  }catch(e){
    console.log('err',e);
    
  }
})


module.exports = { adminRouter };
