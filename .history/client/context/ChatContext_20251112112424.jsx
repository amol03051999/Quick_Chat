import { Children, createContext } from "react";



export const ChatContext = createContext();

export const ChatProvider = ({Children}) =>{

    const [message, setMessage]

    const value = {

    }
 return (
    <ChatContext.Provider value={value}>
        {Children}
    </ChatContext.Provider>
 )
}