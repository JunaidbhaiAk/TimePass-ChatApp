import React,{useContext,useEffect} from 'react'
import { Box,Stack } from '@chakra-ui/react'
import User from './User';
import { AccountContext } from '../../context/AccountProvider';

const FreindsList = () => {
    const {Account,friends,socket,setfriends} = useContext(AccountContext);
    useEffect(()=>{
        socket.current.on('getNewFriend',(data)=>{
            // console.log(data);
            setfriends((pre)=>{
                return [...pre,data?.userData]
            });
        })
        // eslint-disable-next-line
    },[])
    return (
        <Box height="440px" padding="5px" overflowY="scroll"
        sx={{
            '@media screen and (max-width: 700px)':{
              padding:'0',
              height:"418px"
            }
          }}>
            <Stack spacing={2}>
                {friends && friends.map((ele)=>{
                    return <User key={Math.random()} info={ele} userinfo={Account} boolfriend={true}/>
                })}
            </Stack>
        </Box>
    )
}

export default FreindsList
