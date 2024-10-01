import { useAppStore } from "@/redux/store";
import { server } from "@/server";
// import { useAppStore } from "@/store";



import { createContext, useContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null)

export const useSocket = () => {
    return useContext(SocketContext)
}

export const SocketProvider = ({children})=> {
    const socket = useRef();
    const {resellerInfo} = useAppStore();

    useEffect(() => {
      if(resellerInfo) {
        socket.current = io(server, {
            withCredentials: true,
            query: {resellerId:resellerInfo.id},
        });
        socket.current.on("connect", ()=>{
            console.log("Connected to socket serevr");
        });

        const handleReceiveMessage = (message) => {
            const {selectedChatData, selectedChatType, addMessage, addContactsInDMContacts} = useAppStore.getState();

            if(selectedChatType!==undefined && (selectedChatData._id === message.sender._id || selectedChatData._id === message.recipient._id)) {
                addMessage(message);
            }
            addContactsInDMContacts(message);
        }

        const handleReceiveChannelMessage = (message) => {
            const {selectedChatData, selectedChatType, addMessage, addChannelInChannelList} = useAppStore.getState();

            if(selectedChatType!==undefined && selectedChatData._id === message.channelId) {
                addMessage(message);
            }
            addChannelInChannelList(message);
        }

        socket.current.on("receiveMessage", handleReceiveMessage);
        socket.current.on("receive-channel-message", handleReceiveChannelMessage);

        return () => {
            socket.current.disconnect();
        }
      }
    
    }, [resellerInfo])

    return (
        <SocketContext.Provider value={socket.current}>
            {children}
        </SocketContext.Provider>
    )
    
}