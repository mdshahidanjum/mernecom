const User = require('../models/userModel')
const getOtherUsers=async(req, res)=>{
    try{
        const loogedInUserId=req.id;
        const otherUsers=await User.find({_id:{$ne:loogedInUserId}}).select("-password")
        return res.status(200).json(otherUsers)

    }catch(err){
        console.log(err);

    }
}

module.exports=getOtherUsers;