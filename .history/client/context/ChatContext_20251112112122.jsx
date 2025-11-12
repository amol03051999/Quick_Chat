import { Children, createContext } from "react";



export const ChatContext = createContext();

export ChatProvider = ({Children}) =>{

    const

    <ChatContext.Provider value={value}>
        {Children}
    </ChatContext.Provider>
}