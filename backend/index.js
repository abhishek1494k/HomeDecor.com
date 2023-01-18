const express=require("express")
const app=express()
app.use(express.json())

const { userRouter } = require("./routes/user.route")
app.use("/",userRouter)

const {connection}=require("./configs/db")

require("dotenv").config();
const PORT=process.env.port || 8080;
app.listen(PORT,async()=>{
    try{
        await connection;
        console.log('Connected to DB');
        console.log('Server Running at',PORT);
        
    }catch(e){
        console.log('err',e);
    }
})