const express = require("express");
const adminRouter = express.Router();
adminRouter.use(express.json());

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { AdminModel } = require("../models/admin.model");

adminRouter.post("/admin/signup", async (req, res) => {
  let { name, email, password, specialkey } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        console.log("err");
      } else {
        if (specialkey === "admin") {
          const user = new AdminModel({
            name,
            email,
            password: hash,
            specialkey,
          });
          await user.save();
          res.json("Admin Signup Successful");
        } else if(specialkey===""){
          res.json("Fill All Details");
        } else {
          res.json("Wrong Key");
        }
      }
    });
  } catch (e) {
    console.log("Err", e);
  }
});

adminRouter.post("/admin/signin", async (req, res) => {
  let { email, password } = req.body;
  try {
    const user = await AdminModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, process.env.key);
          res.send({ msg: "Admin Signin Successful",token:token });
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

module.exports = { adminRouter };
