import "./chatMessage.css";
import EmogiAdd from "../chatFunction/emogiAdd.tsx";
import useEmojiStore from "../../Stores/useEmojiStore.tsx";
import { useEffect, useState } from "react";

type ChatMessageProps = {
    id: string;
    profileImage: string;
    name: string;
    message: string;
    imageUrl?: string;
    timestamp: string;
    job: string;
    emotion?: any;
};

export default function ChatMessage({ id, profileImage, name, message, timestamp, imageUrl, job }: ChatMessageProps) {
    const EmojiAdded = useEmojiStore(state => state.emojis);
    const addEmojiToStore = useEmojiStore(state => state.addEmoji);
    const removeEmojiToStore = useEmojiStore(state => state.removeEmoji);
    const [emojiList, setEmojiList] = useState<{ [key: string]: number }>({});

    // 이모지 카운트 함수
    const EmojiPrintFunction = (emojiArray: string[]) => {
        const saveList: { [key: string]: number } = {};
        emojiArray.forEach((emoji) => {
            saveList[emoji] = (saveList[emoji] || 0) + 1;
        });
        return saveList;
    };

    // 이모지를 추가하거나 제거하는 함수
    const toButtonAddEmoji = (emoji: string) => {
        const currentEmojis = EmojiAdded[id] || [];
        if (currentEmojis.includes(emoji)) {
            removeEmojiToStore(id, emoji); // 클릭한 특정 이모지만 제거
        } else {
            addEmojiToStore(id, emoji); // 이모지가 없으면 추가
        }
    };

    // 이모지 상태를 업데이트하는 useEffect
    useEffect(() => {
        const currentEmojis = EmojiAdded[id] || [];
        const countedEmojis = EmojiPrintFunction(currentEmojis);
        setEmojiList(countedEmojis);
        console.log(`Updated emojis for message ${id}: ${JSON.stringify(currentEmojis)}`);
    }, [EmojiAdded, id]);

    return (
        <div className="chatMessage-container">
            <img src={profileImage} alt="profile" />
            <div className="chatMessage-contents">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                        className="chatMessage-contents-job"
                        style={job === 'Developer' ? { backgroundColor: '#2982FF' } : { backgroundColor: '#FFC229' }}
                    ></div>
                    <p style={{ fontSize: '16px' }}>{name}</p>
                    <p className="chatMessage-contents-timeStamp">{timestamp}</p>
                </div>
                <p>{message}</p>
                {imageUrl && <img src={imageUrl} alt="attachment" />}

                <div className="chatMessage-emotion">
                    {/* 이모지 출력 및 클릭 시 추가/제거 */}
                    {Object.entries(emojiList).map(([emoji, count]) => (
                        <span
                            key={emoji}
                            onClick={() => toButtonAddEmoji(emoji)}
                            className="chatMessage-emotion-item"
                        >
                            {emoji} {count > 1 && `${count}`}
                        </span>
                    ))}
                </div>
                <EmogiAdd id={id} />
            </div>
        </div>
    );
}
