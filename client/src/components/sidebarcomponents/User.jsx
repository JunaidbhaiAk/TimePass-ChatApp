import { Avatar, Box,IconButton,Text } from '@chakra-ui/react'
import { addFriend } from '../../service/api';
import {AddIcon} from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react';
import React, { useContext,useState,useEffect } from 'react'
import { addConversation,getConversation } from '../../service/api';
import { AccountContext } from '../../context/AccountProvider';
import { PersonContext } from '../../context/PersonProvider';

const User = ({userinfo,info,boolfriend=false}) => {
    const toast = useToast()
    const {setperson} = useContext(PersonContext);
    const [active,setactive] = useState(false);
    const {Account,flag,setflag,socket,activeUsers} = useContext(AccountContext);
    const [lastmsg,setlastmsg] = useState({});
    useEffect(()=>{
        if(!boolfriend) return;
            const getConverstionMessage = async() => {
                const res = await getConversation({sid:Account._id,rid:info._id});
                setlastmsg({text:res?.data?.message,time:res?.data?.updatedAt})
            }
            getConverstionMessage();
            // eslint-disable-next-line
    },[flag])


    const formateTime = (date) => {
        const d = new Date(date)
        const options = {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        };
        const time = new Intl.DateTimeFormat('en-US', options).format(d)
        return time;
    }
    const add = async() => {
        const data = {
            user:userinfo,
            info,
        }
        if(activeUsers?.some(ele=> ele.id === info._id)){
            await addFriend(data);
            socket.current.emit('addFriend',{userData:Account,reciverId:info._id})
            setflag(!flag);
        }else{
            toast({
                title: `Sorry ${info.name} is Offline`,
                description: 'Cant send request when user is Offline',
                status: 'error',
                duration: '4000'
            })
            return;
        } 
    };
    const addperson = async() => {
        if(!boolfriend) return;
        setactive(!active);
        setperson(info);
        await addConversation({sid:Account._id,rid:info._id});
    }
    return (
        <Box display="flex" padding="8px" alignItems="center" _hover={boolfriend && {backgroundColor:"#034488"}} onClick={addperson} tabIndex="-1" _focus={{backgroundColor:"#034488"}} cursor="pointer">
            <Avatar size="sm" src={info.avatar}/>
            <Box display="flex" paddingLeft="15px;" width="100%" justifyContent="space-between" flexDirection={boolfriend ? 'column' : 'row'}>
                <Text fontSize="1rem" fontWeight="500">{info.name}</Text>
                {!boolfriend ? <IconButton isRound size="sm" onClick={add} backgroundColor="#034488" _hover={{color:"#034488",backgroundColor:"#fff"}}><AddIcon /></IconButton>
                :<Box display="flex" >
                    <Text fontSize="0.8rem">{lastmsg && lastmsg?.text}</Text>
                    <Text fontSize="0.8rem" marginLeft="auto">{lastmsg.time && formateTime(lastmsg?.time)}</Text>
                </Box>}
            </Box>
        </Box>
    )
}

export default User
