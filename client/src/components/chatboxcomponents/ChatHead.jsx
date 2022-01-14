import { Avatar, Box,Text,AvatarBadge } from "@chakra-ui/react"
import { AccountContext } from "../../context/AccountProvider";
import {PersonContext} from '../../context/PersonProvider';
import {useContext} from 'react'
const ChatHead = () => {
    const {activeUsers} = useContext(AccountContext)
    const {person} = useContext(PersonContext);
    return (
        <Box width="100%" backgroundColor="#9fb1bcff" padding="8px" display="flex" alignItems="center" height="50px" color="#fff" borderTopRightRadius="10px"> 
            <Avatar size="sm" src={person.avatar}>
            {activeUsers?.some(ele=> ele.id === person._id) ? <AvatarBadge boxSize='0.8rem' bg='green.500' /> : <AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='0.8rem'/>}
            </Avatar>
            <Box display="flex" flexDirection="column" alignItems="center" textAlign="left" paddingLeft="8px">
                <Text fontSize="1rem" fontWeight="semibold">{person.name}</Text>
            </Box>
        </Box>
    )
}

export default ChatHead
