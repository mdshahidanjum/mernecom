const Converstaion =require("../../models/conversationModel");
const Message = require("../../models/messegeModel");
const { io, getReceiverSocketId } = require("../../socket/socket");

 const sendMessageController = async(req, res)=>{

    try{
        const senderId=req.id;
        const receiverId=req.params.id;
        const {message}=req.body;

        let gotConversation=await Converstaion.findOne({
            participants:{$all:[senderId, receiverId]}
        })
        if(!gotConversation){
            gotConversation=await Converstaion.create({
                participants:[senderId, receiverId]
            })
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            gotConversation.messages.push(newMessage._id)
        }

        await gotConversation.save();
      // socket.io
        const receiverSocketId = getReceiverSocketId(receiverId) ;
        if(receiverSocketId){
            io.to(receiverSocketId).emit('newMessage',newMessage)
        }

        return res.status(200).json({
            message:newMessage
        })

    }catch(err){

    }
}

module.exports=sendMessageController;