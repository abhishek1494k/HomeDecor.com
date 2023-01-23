const express = require("express");
const cartRouter = express.Router();
cartRouter.use(express.json());

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { CartModel } = require("../models/cart.model");

const cors=require("cors")
cartRouter.use(cors())

cartRouter.get("/",async(req,res)=>{
    try{
        const pdt=await CartModel.find()
        res.send(pdt)
    }catch(e){
        console.log('err',e);
    }
})

// cartRouter.get("/category/:id",async(req,res)=>{
//     try{
//         const pdt=await PdtModel.find({category:req.params.id})
//         res.send(pdt)
//     }catch(e){
//         console.log('err',e);
//     }
// })

// cartRouter.get("/:id",async(req,res)=>{
//     try{
//         const pdt=await PdtModel.findById({_id:req.params.id})
//         res.send(pdt)
//     }catch(e){
//         console.log('err',e);
//     }
// })

cartRouter.post("/",async(req,res)=>{
    const payload=req.body;
    console.log(payload)
    try{
        const cart_pdt=new CartModel(payload)
        await cart_pdt.save()
        res.json('Product Added to Cart')
    }catch(e){
        console.log('err',e);
    }
})

cartRouter.delete("/:id",async(req,res)=>{
    try{
        await CartModel.findByIdAndDelete({_id:req.params.id})
        res.json('Product Deleted from Cart')
    }catch(e){
        console.log('err',e);
    }
})

// cartRouter.delete("/:id",async(req,res)=>{
//     try{
//         await PdtModel.findByIdAndDelete({_id:req.params.id})
//         res.json("Product Deleted")
//     }catch(e){
//         console.log('err',e);
//     }
// })

// cartRouter.patch("/:id",async(req,res)=>{
//     const payload=req.body;
//     try{
//         await PdtModel.findByIdAndUpdate({_id:req.params.id},payload)
//         res.json("Product Updated")
//     }catch(e){
//         console.log('err',e);
//     }
// })

module.exports={cartRouter}
