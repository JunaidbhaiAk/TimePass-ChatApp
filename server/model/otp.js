import mongoose from "mongoose";


const otpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:false,
        required:true
    }
},
{
    timestamps:true,
});

const otp = mongoose.model('otp',otpSchema);
export default otp;