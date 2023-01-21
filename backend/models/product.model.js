const mongoose=require('mongoose')

const pdtSchema=mongoose.Schema({
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
const PdtModel=mongoose.model('pdt',pdtSchema)
module.exports={PdtModel}