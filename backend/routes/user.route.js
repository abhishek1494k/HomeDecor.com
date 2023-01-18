const express = require("express");
const userRouter = express.Router();
userRouter.use(express.json());
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { UserModel } = require("../models/user.model");

userRouter.get("/", (req, res) => {
  res.send("Home");
});

userRouter.post("/signup", async (req, res) => {
  let { username, email, mob, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        console.log("err");
      } else {
        const user = new UserModel({ username, email, mob, password: hash });
        await user.save();
        res.send("Signup Successful");
      }
    });
  } catch (e) {
    console.log("Err", e);
  }
});

userRouter.post("/signin", async (req, res) => {
  let { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userID: user[0]._id }, process.env.key);
          res.send({ msg: "Signin Successful", token: token });
        } else {
          res.send("Wrong Credentials");
        }
      });
    } else {
      res.send("Wrong Credentials");
    }
  } catch (e) {
    console.log("Err", e);
  }
});

module.exports = { userRouter };
