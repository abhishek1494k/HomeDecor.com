const express = require("express");
const pdtRouter = express.Router();
pdtRouter.use(express.json());

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const cors=require("cors")
pdtRouter.use(cors())

const { PdtModel } = require("../models/product.model");

pdtRouter.get("/",async(req,res)=>{
    try{
        const pdt=await PdtModel.find()
        res.send(pdt)
    }catch(e){
        console.log('err',e);
    }
})

pdtRouter.get("/category/:id",async(req,res)=>{
    try{
        const pdt=await PdtModel.find({category:req.params.id})
        res.send(pdt)
    }catch(e){
        console.log('err',e);
    }
})

pdtRouter.get("/:id",async(req,res)=>{
    try{
        const pdt=await PdtModel.findById({_id:req.params.id})
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
        res.json('Product Added')
    }catch(e){
        console.log('err',e);
        
    }
})

pdtRouter.delete("/:id",async(req,res)=>{
    try{
        await PdtModel.findByIdAndDelete({_id:req.params.id})
        res.json("Product Deleted")
    }catch(e){
        console.log('err',e);
    }
})

pdtRouter.patch("/:id",async(req,res)=>{
    const payload=req.body;
    try{
        await PdtModel.findByIdAndUpdate({_id:req.params.id},payload)
        res.json("Product Updated")
    }catch(e){
        console.log('err',e);
    }
})

module.exports={pdtRouter}
