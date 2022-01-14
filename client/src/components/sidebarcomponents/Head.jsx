import React, { useContext } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { AccountContext } from "../../context/AccountProvider";
import {
  Avatar,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  Box,
  MenuList,
} from "@chakra-ui/react";
// import Profile from "./Profile";
const Head = ({ setopen, open }) => {
  const { Account, setAccount } = useContext(AccountContext);
  const logout = () => {
    localStorage.setItem("auth-token", "");
    setAccount(undefined);
  };
  return (
    <>
      <Box
        display="flex"
        backgroundColor="#2e5266ff"
        padding="8px"
        justifyContent="space-between"
        borderTopLeftRadius="10px"
      >
        <Avatar
          size="sm"
          onClick={() => setopen(!open)}
          src={Account?.avatar}
        />

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            size="sm"
            isRound
            border="2px solid #fff"
          />
          <MenuList>
            <MenuItem onClick={logout} color="black">
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default Head;
