const mongoose=require('mongoose')

const cartSchema=mongoose.Schema({
    name:String,
    image:String,
    rating:Number,
    lowprice:Number,
    highprice:Number,
    category:String,
    quantity:Number,
    userID:String
},{
    versionKey:false,
})
const CartModel=mongoose.model('cart',cartSchema)
module.exports={CartModel}