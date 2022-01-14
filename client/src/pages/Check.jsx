import React,{useEffect,useContext} from 'react'
// import Header from '../components/authcomponents/Header';
import Messanger from './Messanger'
import { AccountContext } from '../context/AccountProvider'
import { verifyToken } from '../service/api';
import { Box } from '@chakra-ui/react';
import Authentication from './Authentication';
const Check = () => {
    const {Account,setAccount} = useContext(AccountContext);
    useEffect(()=>{
        const checkloggedIn = async() => {
            let token = localStorage.getItem("auth-token");
            // console.log(token);
            if(token === null){
                localStorage.setItem("auth-token", "");
                token = "";
            }
            const tokenres = await verifyToken(token);
            // console.log(tokenres);
            if(tokenres?.data){
                setAccount(tokenres.data.info);
            }
        }
        checkloggedIn();
    },[])
    return (
        <Box display="flex" alignItems="center">
            {Account ? <Messanger /> : <Authentication />}
            {/* <Messanger /> */}
        </Box>
    )
}

export default Check
