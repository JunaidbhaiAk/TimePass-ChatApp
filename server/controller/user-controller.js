import user from "../model/user.js"
import otp from '../model/otp.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const addUser = async(req,res) => {

    try{
      const checkstatus = await otp.find({email:req.body.email});
      console.log(req.body);
      if(checkstatus.status === false){
        res.status(200).json('Please Verify Your Otp');
        return;
      }
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const obj = {
        name:req.body.name,
        lastname:req.body.lastname,
        email:req.body.email,
        password:hash,
        avatar:req.body.avatar
      }
      const newuser = new user(obj);
      await newuser.save();
      res.status(200).json('User Added');
    }catch(error){
        res.status(500).json(error);
    }

}

export const getUser = async(req,res) => {
  // console.log(req.body);
  try{
      const person = await user.findOne({email:req.body.email});
      // console.log(person);
      if(!person) res.status(400).json('Email not Register');
      const isMatch = bcrypt.compareSync(req.body.password, person.password);
      if(!isMatch) return res.status(400).json("Password is Incorrect");
      const token = jwt.sign({id:person._id},process.env.JWT_SECRET);
      res.status(200).json({secret:token,person});
    }catch(error){
      console.log(error);
    }
}

export const verifyToken = async(req,res) => {
    try{
      const token = req.header("x-auth-token");
      if(!token) return res.status(200).json(false);
      const verified = jwt.verify(token,process.env.JWT_SECRET);
      if(!verified) return res.status(401).json(false);
      const person = await user.findById(verified.id);
      if(!person) return res.status(401).json(false);
      res.status(200).json({verified:true,info:person});
    }catch(error){
      res.status(500).json("Internal Error");
    }
}


export const getAllUsers = async(req,res) => {
    try{
      const data = await user.find({});
      if(!data){
        return res.status(500).json("no users");
      }
      res.status(200).json(data);
    }catch(error){
      res.status(500).json(error);
    }
}