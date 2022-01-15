import { Box } from '@chakra-ui/react'
import React,{useState,useEffect,useContext} from 'react'
import {getMessage} from '../../service/api'
import Messages from './Messages'
import {AccountContext} from '../../context/AccountProvider';
const ChatWindow = ({conversation}) => {
    const [messages,setmessages] = useState([]);
    const [incomingmsg,setincomingmsg] = useState({});
    const {Account,socket,flag} = useContext(AccountContext); 
    useEffect(() => {
        socket.current.on('getMessage',(data)=>{
            setincomingmsg({
                senderId:data.senderId,
                text: data.text,
                createdAt: Date.now()                
            })
        })
        // eslint-disable-next-line
    }, [])
    useEffect(()=>{
        incomingmsg && conversation?.members?.includes(incomingmsg?.senderId) &&
        setmessages((pre)=>{
            return [...pre,incomingmsg]
        })
    },[conversation,incomingmsg]);
    useEffect(()=>{
        if(!conversation) return;
        const getMessages = async() => {
            const res = await getMessage(conversation._id);
            setmessages(res?.data);
        }
        getMessages();
    },[conversation,flag,Account])
    return (
        <Box backgroundImage="https://i.redd.it/qwd83nc4xxf41.jpg" width="100%" height="490px" backgroundSize="cover" opacity="8px" display="flex" flexDirection="column" padding="8px" overflowY="scroll" alt="backImage"> 
            {messages && messages.map((ele,idx)=>{
                return <Messages text={ele} key={idx}/>
            })}    
        </Box>
    )
}

export default ChatWindow
