const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend Server is running")
})