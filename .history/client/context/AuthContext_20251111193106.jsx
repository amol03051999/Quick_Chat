import { createContext } from "react";

const backendIrl = import.meta.env.VITE_BACKEND_URL;


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