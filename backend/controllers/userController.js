const User = require('../models/userModel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const register = async(req, res)=>{

    try{

        const {fullName, userName, password, confirmPassword, gender}= req.body;
         if(!fullName || !userName || !password || !confirmPassword || !gender){
            return res.status(400).json({message:"All Field are required!"})
         }
         if(password !== confirmPassword){
            return res.status(400).json({message:"Password do not match!"});
         }
         const user = await User.findOne({userName});
         if(user){
            return res.status(400).json({message:"Username already exit try diff" })
         }
         const hashPassword = await bcrypt.hash(password, 10);

      // profilePphoto
        const maleProfileP= `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const femaleProfileP= `https://avatar.iran.liara.run/public/girl?username=${userName}`


        const userr= new User ({
            fullName,
            userName,
            password:hashPassword,
            profilePhoto:gender == "male"? maleProfileP:femaleProfileP,
            gender:gender
            
         })
         userr.save();
         if(!userr){
            return res.status(400).json({message:"some went wrong!"}) 
         }else{
            return res.status(201).json({
               data:userr,
               message:"account create successfull",
               success:true
            })
         }
     
         
         
    }catch(err){

      console.log(err)

    }
}


  
module.exports = register;