const mongoose=require('mongoose')

const pdtSchema=mongoose.Schema({
    name:String,
    image:String,
    image2:String,
    image3:String,
    rating:Number,
    lowprice:Number,
    highprice:Number,
    category:String,
    userID:String


},{
    versionKey:false,
})
const PdtModel=mongoose.model('pdt',pdtSchema)
module.exports={PdtModel}