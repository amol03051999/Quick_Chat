import { createContext, useState } from "react";
import axios from 'axios'
import toast from 

const backendIrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendIrl


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const [token, setToken ] = useState(localStorage.getItem("token"));
    const [authUser, setAuthUser] = useState(null);
    const [onlineUser, setOnlineUser] = useState([]);
    const [socket, setSocket] = useState(null);

    //check if user is authenticated and if so, set the user data and connect the socket
    const checkAuth = async ()=>{
        try{
            const {data} = await axios.get('/api/auth/check');
            if(data.success){
                setAuthUser(data.user);
            }

        }catch(error){
            console.log(error.message)

        }
    }
    const value = {
        axios,
        authUser,
        onlineUser,
        socket,

    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}