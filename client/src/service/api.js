import axios from 'axios'

const url = 'http://localhost:8000';

export const addUser = async(data) => {
    try{
        // console.log(data);
        const res = await axios.post(`${url}/addUser`,data);
        return res;
    }catch(error){
        console.log(error);
    }
}

export const sendOtp = async(data) => {
    try{
        const res = await axios.post(`${url}/sendotp/${data}`);
        return res;
    }catch(error){
        console.log(error);
    }
}

export const verifyOtp = async(data) => {
    try{
        const res = await axios.post(`${url}/verifyotp`,data);
        return res;
    }catch(error){
        console.log(error);
    }
}

export const getUser = async(data) => {
    try{
        const res = await axios.post(`${url}/getUser`,data);
        return res;
    }catch(error){
        console.log(error);
    }
}

export const verifyToken = async(token) => {
    try{
        const res = await axios.post(`${url}/verifytoken`,null,{headers:{"x-auth-token":token}});
        return res;
    }catch(error){
        console.log(error);
    }
}

export const fetchGlobal = async() => {
    try{
        const res = await axios.get(`${url}/getAllUsers`);
        return res;
    }catch(error){
        console.log(error);
    }
}

export const addFriend = async(data) => {
    try {
        const res = await axios.post(`${url}/addFriend`,data);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const getFriends = async(id) => {
    try {
        const res = await axios.get(`${url}/getFriends/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const addConversation = async(data) =>{
    try {
        const res = await axios.post(`${url}/addConversation`,data);
        return res;
    } catch (error) {
        console.log(error);
    }
} 

export const getConversation = async(data) => {
    try{
        const res = await axios.post(`${url}/getConversation`,data); 
        return res;
    }catch(error){
        console.log(error);
    }
}

export const addMessage = async(data) => {
    try{
        const res = await axios.post(`${url}/addMessage`,data);
        return res;
    }catch(error){
        console.log(error);
    }
}

export const getMessage = async(id) => {
    try{
        const res = await axios.get(`${url}/getMessage/${id}`);
        return res;
    }catch(error){
        console.log(error);
    }
}