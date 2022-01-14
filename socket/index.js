import { Server } from "socket.io";

const PORT = 9000;

const io = new Server(PORT,{
    cors:{
        origin: 'http://localhost:3000'
    }
})
let users = [];
const addUser = (id,socketId) =>{
   !users.some(user => user.id === id) && users.push({id,socketId});
}
const removeUser = (socketId) => {
    users = users.filter(ele=>ele.socketId !== socketId);
}

const getUser = (reciverId) => {
    return users.find(user=> user.id === reciverId);
}

io.on("connection",(socket)=>{
    console.log("useConnected");
    
    socket.on('addUser',(id)=>{
        // console.log(id);
        addUser(id,socket.id);
       
        io.emit('getActiveUsers',users);
    })
    // console.log(users);
    socket.on('disconnect',()=>{
        console.log('User Disconnected');
        removeUser(socket.id);
        io.emit('getActiveUsers',users);
    })
    socket.on('sendMessage',({senderId,reciverId,text})=>{
        const reciver = getUser(reciverId);
        // console.log(users);
        io.to(reciver.socketId).emit('getMessage',{senderId,text});
    })
})