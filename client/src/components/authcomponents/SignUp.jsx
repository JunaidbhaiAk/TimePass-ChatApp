import React, { useState } from "react";
import { ViewIcon,CheckIcon } from "@chakra-ui/icons";
import { addUser,sendOtp,verifyOtp } from "../../service/api";

import {
  SlideFade,
  Box,
  Stack,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import AvatarSelector from "./AvatarSelector";
const SignUp = () => {
  const toast = useToast();
  
  const [otp,setotp] = useState(0);
  const [clientotp,setclientotp] = useState();
  const [otpinput, setotpinput] = useState(false);
  const [profile, setprofile] = useState({});
  const [successfull,setsuccesssfull] = useState(false);
 
 
  

  const setInput = (e) => {
    setprofile((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const send = async() => {
    if(profile.email === '') return;
    setotpinput(!otpinput);
    const data = await sendOtp(profile.email);
    data.data.message === 'Please Check Your Mail' ? setotp(data.data.code) : 
    toast({
      title: data.data.message,
      status: "error",
      isClosable: true,
      duration: 8000,
    });
  }
  const checkotp = async() => {
    if(clientotp.length < 6) return;
    if(otp !== parseInt(clientotp)){
      toast({
        title: "Please Enter Correct OTP",
        status: "error",
        isClosable: true,
        duration: 8000,
      });
      return;
    }
    const res = await verifyOtp({email:profile.email,otp:clientotp});
    res?.data === 'verified' ? setsuccesssfull(true) : console.log(res.data);
  }

  const submituser = async () => {
    // console.log(profile);
    profile?.password !== profile.cpassword &&
      toast({
        title: `Password Not Matched!`,
        status: "error",
        isClosable: true,
        duration: 8000,
      });
    // console.log(profile);
    const data = await addUser(profile);
    toast({
      title: data.data,
      status: data.data === "User Added" ? "success" : "error",
      isClosable: true,
      duration: 8000,
    });
    setprofile({});
  };

  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  return (
    <SlideFade in={true} offsetY="20px">
      <Box display="flex" flexDirection="column">
        <Stack spacing={5}>
          <Box display="flex" alignItems="center">
            <AvatarSelector setprofile={setprofile} info={profile}/>
            <Input
              variant="flushed"
              placeholder="Enter Name"
              marginLeft="10px"
              onChange={setInput}
              name="name"
              value={profile?.name}
            />
          </Box>
          <Input
            variant="flushed"
            placeholder="Enter LastName"
            onChange={setInput}
            name="lastname"
            value={profile?.lastname}
          />
          <InputGroup size="md">
            <Input
              variant="flushed"
              placeholder="Enter Email"
              onChange={setInput}
              name="email"
              width="100%"
              value={profile?.email}
            />
            <InputRightElement width="auto">
              <Button
                display={!otpinput ? "block" : "none"}
                colorScheme="teal"
                variant="ghost"
                size="sm"
                onClick={send}
              >
                Send OTP
              </Button>
            </InputRightElement>
              <InputGroup display={otpinput ? "block" : "none"}>
                <Input
                  variant="flushed"
                  placeholder="Enter Otp"
                  borderColor={successfull ? 'green' : 'red'}
                  name="otp"
                  width="60%"
                  onChange={(e)=>setclientotp(e.target.value)}
                />
                {successfull ? 
                <Button size="sm" variant="ghost"><CheckIcon boxSize={5} color="green"/></Button> : <Button
                
                display={!successfull ? "block" : "none"}
                colorScheme="teal"
                variant="ghost"
                size="sm"
                onClick={checkotp}
              >
                Verify
              </Button>}
              </InputGroup>
            
          </InputGroup>
          <InputGroup size="md">
            <Input
              variant="flushed"
              placeholder="Enter Password"
              type={show ? "text" : "password"}
              name="password"
              onChange={setInput}
              value={profile?.value}
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
          <InputGroup size="md">
            <Input
              variant="flushed"
              placeholder="Confirm Password"
              type={show ? "text" : "password"}
              name="cpassword"
              onChange={setInput}
              value={profile?.cpassword}
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

          <Button
            colorScheme="teal"
            variant="outline"
            width="100px"
            onClick={submituser}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </SlideFade>
  );
};

export default SignUp;
