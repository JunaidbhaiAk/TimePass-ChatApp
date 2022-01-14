import React from 'react'
import {Box, Heading, Image,Text} from '@chakra-ui/react'
const StartRightPage = () => {
    return (
        <Box display="flex" flexDirection="column" width="100%" alignItems="center" justifyContent="center" backgroundColor="#9fb1bcff">
            <Image src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" width="200px" height="auto"/>
            <Heading as="h5" size="xl" letterSpacing={2} display="flex">
                <Text color="#8be8bb">TIME</Text><Text color="#62e1fb">PASS</Text>
            </Heading>
            <Text fontSize="m" textAlign="center" color="#fff">Where Friends Chat Freely</Text>
        </Box>
    )
}

export default StartRightPage
