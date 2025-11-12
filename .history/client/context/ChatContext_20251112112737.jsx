import { Children, createContext, useContext } from "react";
import { AuthContext } from "./AuthContext";



export const ChatContext = createContext();

export const ChatProvider = ({Children}) =>{

    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [unseenMessages, setUnseenMessages] = useState({});

    const {socket, axios} = useContext(AuthContext);

    //function to get all users for sidebar
    const getUsers = async () => {
        try{

        }catch(error){
            
        }
    }


    const value = {

    }
 return (
    <ChatContext.Provider value={value}>
        {Children}
    </ChatContext.Provider>
 )
}