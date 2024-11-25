const User = require('../models/userModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')



const login=async (req, res)=>{
    try{
       const {userName, password}=req.body;
       if(!userName || !password){
          return res.status(400).json({message:"All fields are required"});
       }
    
       const userr = await User.findOne({userName});
       if(!userr){
          return res.status(400).json({
             message:"Incorrect username or password",
             success:false
          })
       }
 
       const isPasswordM=await bcrypt.compare(password, userr.password);
 
       if(!isPasswordM){
          return res.status(400).json({
             message:"Incorrect username or password",
             success:false
          })
       }
 
       const tokenData = {
          userId:userr._id
       }
       const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY,{expiresIn:'1d'})
        
       return res.status(200).cookie("token", token,{maxAge:1*24*60*60*1000, httpOnly:true, sameSite:'strict'}).json({
          _id:userr._id,
          userName:userr.userName,
          fullName:userr.fullName,
          profilePhoto:userr.profilePhoto,
          message:"login Successfull"
       })
    }catch(err){
       console.log(err)
 
    }
 }

 module.exports=login;