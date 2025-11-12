import { Children, createContext } from "react";



export const ChatContext = createContext();

export const ChatProvider = ({Children}) =>{

    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelected] = useState([]);


    const value = {

    }
 return (
    <ChatContext.Provider value={value}>
        {Children}
    </ChatContext.Provider>
 )
}