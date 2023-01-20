const express = require("express");
const pdtRouter = express.Router();
pdtRouter.use(express.json());

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { PdtModel } = require("../models/product.model");

pdtRouter.get("/",async(req,res)=>{
    try{
        const pdt=await PdtModel.find()
        res.send(pdt)
    }catch(e){
        console.log('err',e);
    }
})

pdtRouter.post("/",async(req,res)=>{
    const payload=req.body;
    try{
        const new_pdt=new PdtModel(payload)
        await new_pdt.save()
        res.send({'msg':'Product Added'})
    }catch(e){
        console.log('err',e);
        
    }
})

module.exports={pdtRouter}
