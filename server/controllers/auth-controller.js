// function is here
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const Home = async (req, res) => {
  try {
    res.send("home page");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    //get registration data
    const { username, email, phone, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.json({ message: "user alreday exists" });
    }

    // const salt = 10;
    // const hash_password=await bcrypt.hash(password,salt);

    const userCreated = await User.create({ username, email, phone, password });

    res.status(200).json({ msg: userCreated,token:await userCreated.generateToken(),userId:userCreated._id.toString(),});
  } catch (error) {
    // res.json({ message: "internal server error" });
    next(error);
  }



};


const login = async (req, res) => {
  try {
     
    //get registration data
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });
    console.log(userExists);

    if (!userExists) {
      return res.json({ message: "Invalid Crediential" });
    }

    // const salt = 10;
    // const hash_password=await bcrypt.hash(password,salt);

    const user = await bcrypt.compare(password,userExists.password);
     
    if(user){
      res.status(200).json({ msg: "login success",token:await userExists.generateToken(),userId:userExists._id.toString(),});
    }
    else{
      res.json({message:"invalid email and password"});
    }
    
  } catch (error) {
    res.json({ message: "internal server error" });
  }



};

module.exports = { Home, register,login };
