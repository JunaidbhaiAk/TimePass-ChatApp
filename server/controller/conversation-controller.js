import conversation from '../model/conversation.js'

export const addConversation = async(req,res) => {
    const sid = req.body.sid;
    const rid = req.body.rid;
    try{
        const exist = await conversation.findOne({members:{$all:[rid,sid]}});
        if(exist) {
            res.status(200).json(exist);
            return;
        }
        const newConversation = new conversation({
            members:[sid,rid]
        })
        await newConversation.save();
        // const e = await conversation.findOne({members:{$all:[rid,sid]}}); 
        res.status(200).json("Conversation Added");
    }catch(error){
        res.status(500).json(error);
    }
}

export const getConversation = async(req,res) => {
    const sid = req.body.sid;
    const rid = req.body.rid;
    try{
        const data = await conversation.findOne({members:{$all:[rid,sid]}})
        res.status(200).json(data);
    }catch(error){
        res.status(500).json(error);
    }
}