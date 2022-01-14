import React,{useContext} from 'react'
import { Box,Stack } from '@chakra-ui/react'
import User from './User';
import { AccountContext } from '../../context/AccountProvider';

const FreindsList = ({friends}) => {
    const {Account} = useContext(AccountContext);
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
                    return <User key={ele._id} info={ele} userinfo={Account} boolfriend={true}/>
                })}
            </Stack>
        </Box>
    )
}

export default FreindsList
