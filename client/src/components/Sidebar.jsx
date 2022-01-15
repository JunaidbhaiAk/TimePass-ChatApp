import React, { useState,useEffect,useContext } from "react";
import Head from "./sidebarcomponents/Head";
import Search from "./sidebarcomponents/Search";
import { Box } from "@chakra-ui/react";
import MultiTabs from "./sidebarcomponents/MultiTabs";
import Profile from "./sidebarcomponents/Profile";
import { AccountContext } from '../context/AccountProvider';
import { getFriends } from '../service/api';

const Sidebar = () => {
  const {Account,flag,setfriends} = useContext(AccountContext);
  const [text,settext] = useState('');
  const [opendrawe, setopendawer] = useState(false);
  
  useEffect(()=>{
    const get = async() => {
        // if(friends.length !== 0) return
        const res = await getFriends(Account._id);
        const data = res.data?.friends;
        const filterData = data.filter(ele=>ele.name.toLowerCase().includes(text.toLowerCase()))
        setfriends(filterData);
    }
    get();
    // eslint-disable-next-line
  },[flag,text])
  return (
    <>
    <Box width="40%" overflowY="hidden" height="582px" color="#fff" sx={{
      '@media screen and (max-width: 700px)':{
        width:'40%',
      }
    }}>
      <Box
        display="flex"
        flexDirection="column"
        // width="40%"
        borderBottomLeftRadius="10px"
      >
        <Head setopen={setopendawer} open={opendrawe} />
        <Search open={opendrawe} settext={settext}/>
        <MultiTabs />
     
      </Box>
      <Box zIndex="999" transition="0.5s all" opacity={opendrawe ? "1" : "0"} transform={opendrawe ? 'translateY(-580px)' : ""}>
          <Box height="580px">
            <Profile setopen={setopendawer} open={opendrawe}/>
          </Box>
      </Box>
    </Box>  
      
    </>
  );
};

export default Sidebar;
