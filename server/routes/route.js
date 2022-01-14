import express from "express";
import {addMessage,getMessage} from '../controller/messages-controller.js'
import { addUser,getUser,verifyToken,getAllUsers } from "../controller/user-controller.js";
import {sendotp,verifyotp} from '../controller/otp-controller.js'
import { addFriend,getFriends} from "../controller/friend-controller.js";
import {addConversation,getConversation} from '../controller/conversation-controller.js';
const route = express.Router();

route.post('/addUser',addUser);
route.post('/getUser',getUser);
route.post('/verifytoken',verifyToken)
route.post('/sendotp/:email',sendotp);
route.post('/verifyotp',verifyotp);
route.get('/getAllUsers',getAllUsers)

//route for addingFriends to friends List and Getting Friends List
route.post('/addFriend',addFriend);
route.get('/getFriends/:id',getFriends);

route.post('/addConversation',addConversation);
route.post('/getConversation',getConversation);

route.post('/addMessage',addMessage);
route.get('/getMessage/:id',getMessage);
export default route;