import React,{createContext, useState} from 'react'
// import {io} from 'socket.io-client';
export const PersonContext = createContext(null);

const PersonProvider = ({children}) => {
    // const socket = useRef();
    const [person,setperson] = useState({});
    // useEffect(()=>{
    //     socket.current = io('ws://localhost:9000')
    // },[])
    return (
        <PersonContext.Provider value={{person,setperson}}>{children}</PersonContext.Provider>
    )
}

export default PersonProvider
