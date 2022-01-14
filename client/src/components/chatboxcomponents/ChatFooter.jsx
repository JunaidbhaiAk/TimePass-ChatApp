import React,{useContext} from "react";
import {AccountContext} from '../../context/AccountProvider'
import {ArrowRightIcon} from '@chakra-ui/icons'
import {PersonContext} from '../../context/PersonProvider';
import { Box,InputGroup,InputRightElement,Input } from "@chakra-ui/react";
const ChatFooter = ({settypedmessage,sendmsg}) => {
  const {activeUsers} = useContext(AccountContext);
  const {person} = useContext(PersonContext);
  // const inp = useRef(null);
  return (
    <Box backgroundColor="#9fb1bcff" width="100%" height="41px" padding="5px" borderBottomRightRadius="10px">
      <InputGroup>
        <InputRightElement
          size="sm"
          cursor="pointer"
          height="34px"
          color="#3399FF"
          marginTop="2px"
          transition="0.3s all"
          display={!activeUsers?.some(ele=> ele.id === person._id) && 'none'}
          children={<ArrowRightIcon fontSize="sm"/>}
          // _hover={{backgroundColor:"#3399FF",color:"#fff"}}
          onClick={sendmsg}
        />
        {activeUsers?.some(ele=> ele.id === person._id) ? <Input type="text" placeholder="Enter Message" size="sm" backgroundColor="#fff" borderRadius="20px" onChange={(e)=>{settypedmessage(e.target.value)}}/> : <Input type="text" placeholder="Sorry Cant Message When User is Offline" size="sm" backgroundColor="#fff" borderRadius="20px" disabled _placeholder={{color:"#FF0000"}}/>}
      </InputGroup>
    </Box>
  );
};

export default ChatFooter;
