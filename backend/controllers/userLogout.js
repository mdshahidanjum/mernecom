

const logout=(req, res)=>{
    try{

        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"user logged out"
        })



    }catch(err){
        console.log(err);
    }
}

module.exports=logout;