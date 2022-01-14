import React from "react";
import Header from '../components/authcomponents/Header'
import {Box} from '@chakra-ui/react'
const Authentication = () => {
  return (
    <Box backgroundColor="#Fdfff5" display="flex" flexDirection="column" width="100%" alignItems="center" justifyContent="space-between">
      <Box width="500px" height="fit-content" rounded='md' boxShadow='base' m={5}>
       <Header />
      </Box>

      
    </Box>
  );
};

export default Authentication;
