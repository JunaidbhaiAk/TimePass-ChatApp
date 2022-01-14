import React,{createContext, useState,useRef,useEffect} from 'react'
import {io} from 'socket.io-client';
export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {
    const socket = useRef();
    const [Account,setAccount] = useState();
    // const [users,setUsers] = useState([]);
    const [activeUsers,setactiveUsers] = useState([]);
    const [flag,setflag] = useState(false);
    // const [flagg,setflagg] = useState(false);
    useEffect(()=>{
        socket.current = io('ws://localhost:9000')
    },[])
    return (
        <AccountContext.Provider value={{Account,setAccount,activeUsers,setactiveUsers,flag,setflag,socket}}>{children}</AccountContext.Provider>
    )
}

export default AccountProvider
