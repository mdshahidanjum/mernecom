const mongoose = require('mongoose');

const conversationModel = new mongoose.Schema({
    participants: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
    }]
    
}, {
    timestamps:true
})

const Converstaion = mongoose.model("Conversation", conversationModel);

module.exports = Converstaion;