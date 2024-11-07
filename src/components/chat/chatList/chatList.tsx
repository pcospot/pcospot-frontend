import React from 'react';
import "./chatList.css";
import testMesageImage from "../../../assets/testMessageImage.png"
import profileImage from "../../../assets/profile image.svg"
import ChatMessage from "./chatMessage.tsx";

interface ChatListProps {
    children: React.ReactNode; // children을 prop으로 받기 위한 타입 정의
}

const value = [
    {
        profileImage : profileImage,
        name: "Kristin Watson",
        message : "Not too bad, just trying to catch up on some work. How about you?",
        timeStamp: "Today at 09:30 PM",
        imageUrl : testMesageImage,
        job : 'Designer',
        emotion : {
            rough : 3,
            happy : 5
        }
    },
    {
        profileImage : profileImage,
        name: "Kristin Watson",
        message : "Not too bad, just trying to catch up on some work. How about you?",
        timeStamp: "Today at 09:30 PM",
        imageUrl : testMesageImage,
        job : 'Developer',
        emotion : {
            rough : 3,
            happy : 5
        }
    },
    {
        profileImage : profileImage,
        name: "Kristin Watson",
        message : "Not too bad, just trying to catch up on some work. How about you?",
        timeStamp: "Today at 09:30 PM",
        imageUrl : testMesageImage,
        job : 'Developer'
    },
    {
        profileImage : profileImage,
        name: "Kristin Watson",
        message : "Not too bad, just trying to catch up on some work. How about you?",
        timeStamp: "Today at 09:30 PM",
        imageUrl : testMesageImage,
        job : 'Designer',
        emotion : {
            rough : 3,
            happy : 5
        }
    }
];

export default function ChatList({ children }: ChatListProps) {
    return (
        <div className="chatList-container">
            {value.map((item) => {
                return (
                    <ChatMessage
                        key={item.name} // 각 아이템에 고유한 key를 추가
                        profileImage={item.profileImage}
                        name={item.name}
                        message={item.message}
                        timestamp={item.timeStamp}
                        imageUrl={item.imageUrl}
                        job={item.job}
                        emotion={item.emotion}
                    />
                );
            })}
            <div className="chatList-container-box"></div>
            {children}
        </div>
    );
}
