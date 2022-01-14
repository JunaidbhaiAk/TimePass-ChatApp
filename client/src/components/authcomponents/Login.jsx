import React, { useContext, useRef } from "react";
import { ViewIcon } from "@chakra-ui/icons";
import { getUser } from "../../service/api";
import { AccountContext } from "../../context/AccountProvider";
import { Switch } from "@chakra-ui/react";
import {
  Box,
  useToast,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Button,
  SlideFade,
  Text
} from "@chakra-ui/react";
const Login = () => {
  const toast = useToast();
  const [input, setinput] = React.useState({});
  const [show, setShow] = React.useState(false);
  const { setAccount } = useContext(AccountContext);
  const toggle = useRef(null);
  const handleClick = () => setShow(!show);

  const fillinput = (e) => {
    const { name, value } = e.target;
    setinput((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const Login = async () => {
    const loginres = await getUser(input);
    if (loginres.status === 200) {
      setTimeout(() => {
        toast({
          title: 'Succes',
          description: 'LogiedIn Successfull',
          status: 'sucess',
          position:'top-right',
          duration: 3000,
        })
      }, 3500);
      toggle.current.checked !== true
        ? setAccount(loginres.data?.person)
        : localStorage.setItem("auth-token", loginres.data.secret);
      setAccount(loginres.data?.person);
    }
  };

  return (
    <SlideFade in={true} offsetY="20px">
      <Box display="flex" flexDirection="column">
        <Stack spacing={5}>
          <Input
            variant="flushed"
            placeholder="Enter Username"
            onChange={fillinput}
            name="email"
          />
          <InputGroup size="md">
            <Input
              variant="flushed"
              onChange={fillinput}
              placeholder="Enter Password"
              type={show ? "text" : "password"}
              name="password"
            />
            <InputRightElement width="4.5rem">
              <ViewIcon
                onClick={handleClick}
                color={show ? "black" : "teal"}
                boxSize={5}
                cursor="pointer"
              />
            </InputRightElement>
          </InputGroup>
          <Box display="flex" alignItems="center">
          <Switch id="email-alerts" ref={toggle} size="sm"/>
          <Text fontSize="0.9rem" padding="5px">RememberMe</Text>
          </Box>
          <Button
            colorScheme="teal"
            variant="outline"
            width="100px"
            onClick={Login}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </SlideFade>
  );
};

export default Login;
