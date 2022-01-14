import React,{useState,useContext,useEffect} from 'react'
import ChatFooter from './chatboxcomponents/ChatFooter'
import {
    Box
} from '@chakra-ui/react'
import {addMessage, getConversation} from '../service/api'
import ChatHead from './chatboxcomponents/ChatHead'
import {AccountContext} from '../context/AccountProvider';
import {PersonContext} from '../context/PersonProvider';
import ChatWindow from './chatboxcomponents/ChatWindow'
const Chatbox = () => {
    const {person} = useContext(PersonContext);
    const [conversation,setconversation] = useState({});
    const [typedmessage,settypedmessage] = useState();
    const {socket,Account,flag,setflag} = useContext(AccountContext); 
    const sendmsg = async() => {
        const date = new Date();
        await addMessage({senderId:Account._id,conversationId:conversation._id,text:typedmessage,createdAt:date});
        socket.current.emit('sendMessage',{
          senderId:Account._id,
          reciverId:person._id,
          text:typedmessage
        })
        settypedmessage("");
        setflag(!flag);
    }
    useEffect(() => {
        const getConversationDetail = async() =>{
            let data = await getConversation({sid:Account._id,rid:person._id});            
            // console.log(data);
            setconversation(data.data);
        }
        getConversationDetail();
        // eslint-disable-next-line
    }, [person._id])
    return (
        <Box display="flex" flexDirection="column" width="60%" height="fit-content" borderBottomRightRadius="10px"
        sx={{
            '@media screen and (max-width: 700px)':{
              width:'65%',
            }
          }}> 
            <ChatHead />
            <ChatWindow conversation={conversation}/>
            <ChatFooter settypedmessage={settypedmessage} sendmsg={sendmsg}/>
        </Box>
    )
}

export default Chatbox
