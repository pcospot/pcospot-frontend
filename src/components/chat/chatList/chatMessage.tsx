import "./chatMessage.css";
import EmogiAdd from "../chatFunction/emogiAdd.tsx";
import useEmojiStore from "../../Stores/useEmojiStore.tsx";
import { useEffect } from "react";

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

export default function ChatMessage({ id, profileImage, name, message, timestamp, imageUrl, job, emotion }: ChatMessageProps) {
    const EmojiAdded = useEmojiStore(state => state.emojis);

    useEffect(() => {
        console.log(`Updated emojis for message ${id}: ${JSON.stringify(EmojiAdded[id] || [])}`);
    }, [EmojiAdded, id]);

    return (
        <div className="chatMessage-container">
            <img src={profileImage} alt="image not found" />
            <div className="chatMessage-contents">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                        className="chatMessage-contents-job"
                        style={
                            job === 'Developer' ? { backgroundColor: '#2982FF' } : { backgroundColor: '#FFC229' }
                        }
                    ></div>
                    <p style={{ fontSize: '16px' }}>{name}</p>
                    <p className="chatMessage-contents-timeStamp">{timestamp}</p>
                </div>
                <p>{message}</p>
                <img src={imageUrl} alt="image not found" />
                {emotion && (
                    <div className="chatMessage-emotion">
                        {Object.entries(emotion).map(([key, value]) => (
                            <p key={key}>
                                {value}
                            </p>
                        ))}
                    </div>
                )}
                <div className="chatMessage-emojis">
                </div>
                <EmogiAdd id={id}></EmogiAdd>
            </div>
        </div>
    );
}
