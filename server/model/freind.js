import mongoose from "mongoose";


const friendSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    friends:{
        type:Array
    }
},);

const friend = mongoose.model('friend',friendSchema);
export default friend;