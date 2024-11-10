import React, { useEffect, useState } from 'react';
import "./chatList.css";
import testMesageImage from "../../../assets/testMessageImage.png";
import profileImage from "../../../assets/profile image.svg";
import ChatMessage from "./chatMessage.tsx";
import useEmojiStore from "../../Stores/useEmojiStore.tsx";

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
        emotion: {}
    },
    {
        profileImage: profileImage,
        id: 'a123aa1235',
        name: "Kristin Watson",
        message: "Not too bad, just trying to catch up on some work. How about you?",
        timeStamp: "Today at 09:30 PM",
        imageUrl: testMesageImage,
        job: 'Developer',
        emotion: {}
    },
    {
        profileImage: profileImage,
        id: 'z123zz1234',
        name: "Kristin Watson",
        message: "Not too bad, just trying to catch up on some work. How about you?",
        timeStamp: "Today at 09:30 PM",
        imageUrl: testMesageImage,
        job: 'Developer',
        emotion: {}
    },
    {
        profileImage: profileImage,
        id: 'r1234kkk123',
        name: "Kristin Watson",
        message: "Not too bad, just trying to catch up on some work. How about you?",
        timeStamp: "Today at 09:30 PM",
        imageUrl: testMesageImage,
        job: 'Designer',
        emotion: {}
    }
];

export default function ChatList({ children }: ChatListProps) {
    const emojiList = useEmojiStore(state => state.emojis);
    const [messages, setMessages] = useState(value);

    // emojiList가 변경될 때마다 value 배열 업데이트
    useEffect(() => {
        emojiListAdd();
        setMessages([...value]);// value를 직접 수정한 후 업데이트된 값을 messages에 반영
        console.log(value)
    }, [emojiList]);

    // value 배열을 직접 수정하여 이모지를 추가하는 함수
    const emojiListAdd = () => {
        value = value.map((item) => {
            if (emojiList[item.id]) {
                // 해당 id에 맞는 이모지 배열을 value에 추가
                return {
                    ...item,
                    emotion: {
                        ...item.emotion,
                        emojis: emojiList[item.id]
                    }
                };
            }
            return item;
        });
    };

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
