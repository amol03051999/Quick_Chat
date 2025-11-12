import { createContext, useState } from "react";
import axios from 'axios'

const backendIrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendIrl


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const [token, setToken ] = useState(localStorage.getItem("token"));
    const [authUser, setAuthUser] = useState(null)
    const [onlineUser, setOnlineUser] = useState([])
    const value = {
        axios,

    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}