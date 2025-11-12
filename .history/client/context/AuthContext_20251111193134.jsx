import { createContext } from "react";
import axios from 'axios'

const backendIrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backen


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const value = {

    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}