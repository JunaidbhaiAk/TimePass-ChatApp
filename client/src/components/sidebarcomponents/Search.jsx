import { Box,Input,InputGroup,Stack,InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

const Search = ({open,settext}) => {
  return (
    <Box display="flex" backgroundColor="#2e5266ff" padding="8px" width="100%">
      <Stack spacing={4} width="100%">
        <InputGroup>
          <InputLeftElement opacity={open ? "0" : "1"}><SearchIcon color="gray.300" fontSize="sm" marginTop="-7px"/></InputLeftElement>
          <Input type="text" placeholder="Search Friends" backgroundColor="#fff" border="none" borderRadius="15px" size="sm" color="#034488" onChange={(e)=>settext(e.target.value)}/>
        </InputGroup>
      </Stack>
    </Box>
  );
};

export default Search;
