import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Box,
  Heading,
  Text
} from "@chakra-ui/react";
import Login from "./Login";
import SignUp from "./SignUp";
const Header = () => {
  return (
    <div>
      <Tabs align="center" isLazy={true} backgroundColor="#fff">
        <TabList>
          <Tab width="50%">Login</Tab>
          <Tab width="50%">SingUp</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Login />
          </TabPanel>
          <TabPanel>
            <SignUp />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Box display="flex" padding={5} borderTop="1px" borderColor="lightgrey" alignItems="center" justifyContent="space-between" backgroundColor="#fff">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"
          width="50px"
          height="auto"
          alt="company"
        />
        <Box display="flex" flexDirection="column" margin="auto">
        <Heading as="h5" size="lg" letterSpacing={2} display="flex">
          <Text color="#8be8bb">TIME</Text><Text color="#62e1fb">PASS</Text>
        </Heading>
        <Text fontSize="xs" textAlign="center" >Where Friends Chat Freely</Text>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
