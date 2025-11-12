import { createContext } from "react";

const backen

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