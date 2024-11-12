import React, { useEffect, useState } from 'react';
import "./chatList.css";
import testMesageImage from "../../../assets/testMessageImage.png";
import profileImage from "../../../assets/profile image.svg";
import ChatMessage from "./chatMessage.tsx";

interface ChatListProps {
    children: React.ReactNode;
}

let value = [
    {
        profileImage: profileImage,
        id: 'k1234kkk123',
        name: "Kristin Watson",
        message: "Not too bad, just trying to catch up on some work. How about you?",
        timeStamp: "Today at 09:30 PM",
        imageUrl: testMesageImage,
        job: 'Designer',
    },
    {
        profileImage: profileImage,
        id: 'a123aa1235',
        name: "Kristin Watson",
        message: "Not too bad, just trying to catch up on some work. How about you?",
        timeStamp: "Today at 09:30 PM",
        imageUrl: testMesageImage,
        job: 'Developer',
    },
    {
        profileImage: profileImage,
        id: 'z123zz1234',
        name: "Kristin Watson",
        message: "Not too bad, just trying to catch up on some work. How about you?",
        timeStamp: "Today at 09:30 PM",
        imageUrl: testMesageImage,
        job: 'Developer',
    },
    {
        profileImage: profileImage,
        id: 'r1234kkk123',
        name: "Kristin Watson",
        message: "Not too bad, just trying to catch up on some work. How about you?",
        timeStamp: "Today at 09:30 PM",
        imageUrl: testMesageImage,
        job: 'Designer',
    }
];

export default function ChatList({ children }: ChatListProps) {
    const [messages, setMessages] = useState(value);

    useEffect(() => {
        setMessages([...value])
        console.log(value)
    }, [messages]);


    return (
        <div className="chatList-container">
            {messages.map((item) => (
                <ChatMessage
                    id={item.id}
                    key={item.id}
                    profileImage={item.profileImage}
                    name={item.name}
                    message={item.message}
                    timestamp={item.timeStamp}
                    imageUrl={item.imageUrl}
                    job={item.job}
                    emotion={item.emotion}
                />
            ))}
            <div className="chatList-container-box"></div>
            {children}
        </div>
    );
}
