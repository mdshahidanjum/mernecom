const Converstaion = require("../../models/conversationModel");

const getMessageController=async(req, res)=>{
    try{
        const receiverId=req.params.id;
        const senderId=req.id;
        const conversation = await Converstaion.findOne({
            participants:{$all:[senderId,receiverId]}
        }).populate("messages")

        //    console.log(conversation?.messages)
           
        return res.status(200).json(conversation?.messages)


    }catch(err){
        console.log(err)

    }

}

module.exports=getMessageController;