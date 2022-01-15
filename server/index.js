import express from 'express';
import { Server } from "socket.io";
import dotenv from 'dotenv'
import cors from 'cors';
import Connection from './config/db.js';
import bodyParser from 'body-parser';
import route from './routes/route.js';

const app = express();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
dotenv.config();

const dbuser = process.env.DB_USERNAME;
const dbpass = process.env.DB_PASS;
Connection(dbuser,dbpass);

app.use('/',route)

app.get('/',(req,res)=>{
    res.send('hi');
})


const port = 8000;


const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const io = new Server(server,{
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
  socket.on('addFriend',({userData,reciverId}) => {
    const reciver = getUser(reciverId);
    io.to(reciver.socketId).emit('getNewFriend',{userData});
    })
})