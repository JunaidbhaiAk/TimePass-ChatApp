import React from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Users from "./Users";

import FreindsList from "./FreindsList";
const MultiTabs = ({fri}) => {
  
 
  return (
    <Tabs defaultIndex={1} isFitted backgroundColor="#2e5266ff" variant="unstyled" borderBottomLeftRadius="10px">
      <TabList>
        <Tab _selected={{ color: '#fff',borderBottom:"1px solid #fff"}} _focus={{boxShadow:"none"}}>Friends</Tab>
        <Tab _selected={{ color: '#fff',borderBottom:"1px solid #fff"}} _focus={{boxShadow:"none"}}>Add Friends</Tab>
      </TabList>
      <TabPanels>
        <TabPanel padding="2px">
          <FreindsList friends={fri}/>
        </TabPanel>
        <TabPanel padding="2px">
          <Users friends={fri}/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MultiTabs;
