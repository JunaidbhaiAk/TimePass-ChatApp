import { Box, Stack } from '@chakra-ui/react'
import {fetchGlobal} from '../../service/api'
import {AccountContext} from '../../context/AccountProvider';
import React, { useEffect, useState } from 'react'
import User from './User'
import { useContext } from 'react'

const Users = ({friends}) => {
    const {Account} = useContext(AccountContext);
    const [users,setusers] = useState([]);
    useEffect(()=>{
        const fetchUsers = async() => {
            if(users.length !== 0) return;
            const res = await fetchGlobal();
            setusers(res?.data);
        }
        fetchUsers();
    })
    const checkarray = (id) => {
        const check = friends?.find(ele => {
          return ele._id === id ? true : false;
        })
        return check;
    }
    return (
        <Box height="440px" padding="5px" overflowY="scroll"
        sx={{
            '@media screen and (max-width: 700px)':{
              padding:'0',
            }
          }}>
            <Stack spacing={2}>
                {users && users.map((ele)=>{
                    return Account._id !== ele._id && !checkarray(ele._id) ? <User key={ele._id} info={ele} userinfo={Account}/> : "";
                })}
            </Stack>
        </Box>
    )
}

export default Users
