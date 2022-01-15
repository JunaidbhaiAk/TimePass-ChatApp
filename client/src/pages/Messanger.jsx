import React, {useContext,useEffect } from 'react'
import {Box} from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'
import Chatbox from '../components/Chatbox'
import {AccountContext} from '../context/AccountProvider'
import StartRightPage from '../components/StartRightPage'
import {PersonContext} from '../context/PersonProvider'
function Messanger() {
    const {person} = useContext(PersonContext);
    const {Account,socket,setactiveUsers,flag} = useContext(AccountContext);

    useEffect(() => {
        socket.current.emit('addUser',Account._id);
        socket.current.on('getActiveUsers',(users)=>{
            setactiveUsers(users);
        })
        // eslint-disable-next-line
    }, [Account,flag])
    
    // const [width,setwidth] = useState(false);
    return (
           <Box display="flex" backgroundColor="#fff" width="100%" padding="10px" >
               <Box display="flex" width="100%" boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;" borderRadius="10px"> 
               <Sidebar />
               {Object.keys(person).length === 0 ? <StartRightPage /> : <Chatbox />}
               </Box>
           </Box>
    )
}

export default Messanger
