import { Avatar, Stack,Text,Box,Icon} from '@chakra-ui/react'
import {ArrowBackIcon} from '@chakra-ui/icons'
import React,{useContext} from 'react'
import ProfileCards from './ProfileCards'
import {AccountContext} from '../../context/AccountProvider'
const Profile = ({setopen,open}) => {
    const {Account} = useContext(AccountContext);
    return (
        <>
        <Box height="100px" backgroundColor="#2e5266ff" padding="15px" display="flex" alignItems="center" borderTopLeftRadius="10px">
        {/* <ArrowBackIcon color="#FFFFFF" w={4} h={4} cursor="pointer" /> */}
        <Icon as={ArrowBackIcon} w={5} h={5} cursor="pointer" color="#fff" onClick={()=>setopen(!open)}/>
            <Text fontWeight="500" fontSize="1.5rem" color="#fff" marginLeft="8px">Profile</Text>
        </Box>
        <Stack spacing={3} backgroundColor="whitesmoke" height="485px" padding="5px" borderBottomLeftRadius="10px">
            
            <Avatar size="xl" marginLeft="auto" marginRight="auto" src={Account.avatar}/>
            <ProfileCards name={Account.name} placeh="Name"/>
            <Text color="lightgray" fontWeight="500" >This is Your UserName visible to all users</Text>
            <ProfileCards name={Account.email} placeh="Email"/>
        </Stack>
        </>
    )
}

export default Profile
