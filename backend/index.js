const express = require("express");
const app = express();
app.use(express.json());
const cors=require("cors")
app.use(cors())


const { userRouter } = require("./routes/user.route");
app.use("/", userRouter);
const { adminRouter } = require("./routes/admin.route");
app.use("/admin", adminRouter);
const { auth } = require("./middlewares/authenticator");
app.use(auth)
const { pdtRouter } = require("./routes/product.route");
app.use("/pdt",pdtRouter)
const { cartRouter } = require("./routes/cart.route");
app.use("/cart",cartRouter)

const { connection } = require("./configs/db");

require("dotenv").config();
const PORT = process.env.port || 8080;
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
    console.log("Server Running at", PORT);
  } catch (e) {
    console.log("err", e);
  }
});
