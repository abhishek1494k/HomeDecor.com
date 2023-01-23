const express = require("express");
const userRouter = express.Router();
userRouter.use(express.json());
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { UserModel } = require("../models/user.model");

const cors=require("cors")
userRouter.use(cors())


userRouter.get("/", (req, res) => {
  res.send("Home");
});

userRouter.post("/signup", async (req, res) => {
  let { name, email, mob, password } = req.body;
  try {
    if(name&&email&&mob&&password){
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          console.log("err");
          res.json("Error");
        } else {
          const user = new UserModel({ name, email, mob, password: hash });
          await user.save();
          res.json("Signup Successful");
        }
      });
    }else {
      res.json("Fill all Details")
    }

  } catch (e) {
    console.log("Err", e);
    res.json("Error");
  }
});

userRouter.post("/signin", async (req, res) => {
  let { email, password } = req.body;
  var name;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, process.env.key);
          res.send({ msg: "Signin Successfull", token: token ,name:user[0].name});
        } else {
          res.send({ msg: "Wrong Credentials"});
        }
      });
    } else {
      res.send({ msg: "Create Account First"});
    }
  } catch (e) {
    console.log("Err", e);
  }
});


userRouter.get("/showuser", async (req, res) => {
  try {
    const user = await UserModel.find()
    res.send(user)
  } catch (e) {
    console.log("Err", e);
  }
});

userRouter.delete("/deleteuser/:id", async (req, res) => {
  try {
   await UserModel.findByIdAndDelete({_id:req.params.id})
   res.json( "User Blocked");
  } catch (e) {
    console.log("Err", e);
  }
});

module.exports = { userRouter };
