import React from 'react'
import {Box,Text} from '@chakra-ui/react'
const ProfileCards = ({name,placeh}) => {
    return (
        <Box display="flex" flexDirection="column" margin="10px" backgroundColor="#fff" color="black">
                <Box p="8px" borderBottom="2px solid whitesmoke"><Text fontSize="0.8rem">{placeh}</Text></Box>
                <Box p="8px"><Text fontSize="1rem">{name}</Text></Box>
        </Box>
    )
}

export default ProfileCards
