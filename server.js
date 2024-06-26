import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import authRouter from './routes/auth.route.js'

const app = express();
dotenv.config();
app.use(express.json())
app.use(cookieParser());
const port = 4000;

mongoose.connect(process.env.MONGODB_URI).then(()=>{
  console.log("Connected to Database");
}).catch((err)=>{
  console.log(err)
});

app.use('/api/auth',authRouter);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
