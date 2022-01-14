import messages from '../model/messages.js'
import conversation from '../model/conversation.js'

export const addMessage = async(req,res) => {
    // console.log(req.body);
    const newmsg = new messages(req.body);
    try{
        await newmsg.save(); 
        // cosole.log(resc);
        await conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text});
        res.status(200).json("message added");
    }catch(error){
        res.status(500).json(error);
    }
}

export const getMessage = async(req,res) => {
    // console.log(req.params.id);
    try{
        const resc = await messages.find({conversationId:req.params.id});
        // console.log(resc);
        res.status(200).json(resc);
    }catch(error){
        res.status(500).json(error);
    }
}