import { Children, createContext, useContext } from "react";



export const ChatContext = createContext();

export const ChatProvider = ({Children}) =>{

    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [unseenMessages, setUnseenMessages] = useState({});

    const {socket, axios} = useContext(Auth


    const value = {

    }
 return (
    <ChatContext.Provider value={value}>
        {Children}
    </ChatContext.Provider>
 )
}