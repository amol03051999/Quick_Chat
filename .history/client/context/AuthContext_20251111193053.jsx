import { createContext } from "react";

const backendIrl = import.meta.env.

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