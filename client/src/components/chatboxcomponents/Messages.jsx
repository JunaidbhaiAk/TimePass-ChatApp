import { Box,Text } from '@chakra-ui/react'
import {AccountContext} from '../../context/AccountProvider'
import React,{useContext} from 'react'


const Messages = ({text}) => {
    const {Account} = useContext(AccountContext);
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
    return (
        <>
        {text.senderId === Account._id ? <Box display="flex" padding="8px" backgroundColor="#2e5266ff" maxWidth="300px" width="fit-content" borderRadius="8px" marginLeft="auto" marginBottom="8px">
            <Text color="#FFF" fontSize="0.8rem" fontWeight="semibold">{text.text}</Text>
            <Text color="#FFF" fontSize="0.5rem" marginTop="auto" width="fit-content" paddingLeft="5px">{formateTime(text.createdAt)}</Text>
        </Box>
        :
        <Box display="flex" padding="8px" backgroundColor="#Fdfcfa" maxWidth="300px" width="fit-content" borderRadius="8px" border="1px solid #2e5266ff" marginBottom="8px">
         <Text color="#2e5266ff" fontSize="0.8rem" fontWeight="semibold">{text.text}</Text>
         <Text color="#2e5266ff" fontSize="0.5rem" marginTop="auto" width="fit-content" paddingLeft="5px">{formateTime(text.createdAt)}</Text>
        </Box>}
        </>
    )
}

export default Messages
