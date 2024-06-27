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

// mongoose.connect("mongodb://localhost:27017/NexusNews", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

app.use('/api/auth',authRouter);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
