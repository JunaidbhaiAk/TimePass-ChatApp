import mongoose from "mongoose";


const messagesSchema = new mongoose.Schema({
    senderId:{
        type:String
    },
    conversationId:{
        type:String
    },
    text:{
        type:String
    },
    createdAt:{
        type:String
    }
},
)

const messages = mongoose.model('messages',messagesSchema);
export default messages;