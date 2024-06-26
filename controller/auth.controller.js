import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const signup= async (req,res,next) => {
      const { username, password,email } = req.body;
    
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);
      
      const newUser = new User({ username,email, password: hashedPassword });
      try {
        await newUser.save();
        res.status(201).send("User registered");
      } catch (error) {
        res.status(400).send("Error registering user");
      }
    };
    

export const signin= async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("User not found");

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid credentials");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    const {password:pass,...rest}=user._doc;
    res.status(200)
    .cookie('access_token',token,{httpOnly:true})
    .json(rest);
  } catch (error) {
    res.status(400).send("Error logging in");
  }
};

export const googleAuth=async(req,res,next)=>{
  try {
    const user=await User.findOne({email:req.body.email});
    if(user){//if exisits
      const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
      const {password:pass,...rest}=user._doc;
      res
        .cookie('access_token',token,{httpOnly:true})
        .status(200)
        .json(rest)
    }
    else{//does not exist
      const generatedPassowrd=Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8);
      const hashedPassword=bcryptjs.hashSync(generatedPassowrd,10);
      const newUser=new User({username:req.body.name.split(" ").join("")+Math.random().toString(36).slice(-4), email:req.body.email, password:hashedPassword, avatar:req.body.image});
      await newUser.save();
      const token=jwt.sign({id:newUser._id},process.env.JWT_SECRET);
      const {password:pass,...rest}=newUser._doc;
      res
        .cookie('access_token',token,{httpOnly:true})
        .status(200)
        .json(rest)
    }
  } catch (error) {
    res.json(error)
  }
}
