import mongoose from "mongoose";

const Connention = async (user,pass) => {
    const url = `mongodb+srv://${user}:${pass}@tpcluster.m6sbk.mongodb.net/TIMEPASS?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(url,{});
        console.log('Connected to Database')
    }catch(error){
        console.log(error);
    }
}

export default Connention;
