import friend from "../model/freind.js";

export const addFriend = async(req,res) => {
    try{
        const user = req.body.user
        const friendInfo = req.body.info
        // console.log(user,friendInfo)
        await friend.updateOne({userId:user._id},{$push:{friends:friendInfo}},{upsert:true});
        await friend.updateOne({userId:friendInfo._id},{$push:{friends:user}},{upsert:true});
    res.status(200).json("friend added");
    }catch(error){
        res.status(500).json(error);
    }
    
}

export const getFriends = async(req,res) => {
    try{
        // console.log(req.body)
        const data = await friend.findOne({userId:req.params.id});
        res.status(200).json(data);
    }catch(error){
        res.status(500).json(error);
    }
    
}