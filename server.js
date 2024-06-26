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


// app.post("/api/register", async (req, res) => {
//   const { username, password,email } = req.body;

//   try {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = new User({ username,email, password: hashedPassword });
//     await newUser.save();

//     res.status(201).send("User registered");
//   } catch (error) {
//     res.status(400).send("Error registering user");
//   }
// });

// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).send("User not found");

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).send("Invalid credentials");

//     const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });
//     res.status(200).json({ token });
//   } catch (error) {
//     res.status(400).send("Error logging in");
//   }
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
