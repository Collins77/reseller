import { useSocket } from "@/context/SocketContext";
import apiClient from "@/lib/api-client";
import { UPLOAD_FILE_ROUTE } from "@/lib/constants";
import { useAppStore } from "@/redux/store";
// import { useAppStore } from "@/store";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react"
import { GrAttachment } from "react-icons/gr"
import { IoSend } from "react-icons/io5";
import { RiEmojiStickerLine } from "react-icons/ri";

const MessageBar = () => {
    const emojiRef = useRef();
    const fileInputRef = useRef();
    const socket = useSocket();
    const { selectedChatType, setIsUploading, setFileUploadProgress, selectedChatData, resellerInfo } = useAppStore();
    const [message, setMessage] = useState("");
    const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (emojiRef.current && !emojiRef.contains(event.target)) {
                setEmojiPickerOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [emojiRef])

    const handleAddEmoji = (emoji) => {
        setMessage((msg) => msg + emoji.emoji)
    };

    const handleSendmessage = async () => {
        if (selectedChatType === "contact") {
            socket.emit("sendMessage", {
                sender: resellerInfo.id,
                content: message,
                recipient: selectedChatData._id,
                messageType: "text",
                fileUrl: undefined,
            })
        } else if (selectedChatType === "channel") {
            socket.emit("send-channel-message", {
                sender: resellerInfo.id,
                content: message,
                messageType: "text",
                fileUrl: undefined,
                channelId: selectedChatData._id,
            })
        }
        setMessage("");
    };

    const handleAttachmentClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }
    const handleAttachmentChange = async (e) => {
        try {
            const file = e.target.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                setIsUploading(true);
                const response = await apiClient.post(UPLOAD_FILE_ROUTE, formData, {
                    withCredentials: true, onUploadProgress: data => {
                        setFileUploadProgress(Math.round((100 * data.loaded) / data.total));
                    }
                });
                if (response.status === 200 && response.data) {
                    setIsUploading(false)
                    if (selectedChatType === "contact") {
                        socket.emit("sendMessage", {
                            sender: resellerInfo.id,
                            content: undefined,
                            recipient: selectedChatData._id,
                            messageType: "file",
                            fileUrl: response.data.filePath,
                        });
                    } else if(selectedChatType === "channel") {
                        socket.emit("send-channel-message", {
                            sender: resellerInfo.id,
                            content: undefined,
                            messageType: "file",
                            channelId: selectedChatData._id,
                            fileUrl: response.data.filePath,
                        });
                    }
                }
            }
            console.log({ file })
        } catch (error) {
            setIsUploading(false)
            console.log({ error })
        }
    }

    return (
        <div className="h-[10vh] bg-[#1c1d25] flex justify-center items-center px-8 mb-6 gap-6">
            <div className="flex-1 flex bg-[#2a2b33] rounded-md items-center gap-5 pr-5">
                <input type="text" className="flex-1 p-5 bg-transparent rounded-md focus:border-none focus:outline-none" placeholder="Enter Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={handleAttachmentClick} className="text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all">
                    <GrAttachment className="text-2xl" />
                </button>
                <input type="file" className="hidden" ref={fileInputRef} onChange={handleAttachmentChange} />
                <div className="relative">
                    <button onClick={() => setEmojiPickerOpen(true)} className="text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all">
                        <RiEmojiStickerLine className="text-2xl" />
                    </button>
                    <div className="absolute bottom-16 right-0" ref={emojiRef}>
                        <EmojiPicker theme="dark" open={emojiPickerOpen} onEmojiClick={handleAddEmoji} autoFocusSearch={false} />
                    </div>
                </div>
            </div>
            <button onClick={handleSendmessage} className="bg-[#8417ff] rounded-md flex items-center justify-center p-5 focus:border-none hover:bg-[#741bda] focus:bg-[#741bda] focus:outline-none focus:text-white duration-300 transition-all">
                <IoSend className="text-2xl" />
            </button>
        </div>
    )
}

export default MessageBar