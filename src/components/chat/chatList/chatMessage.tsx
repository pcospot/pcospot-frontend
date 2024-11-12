import "./chatMessage.css";

type ChatMessageProps = {
    id?: string;
    profileImage: string;
    name: string;
    message: string;
    imageUrl?: string;
    timestamp: string;
    job: string;
};

export default function ChatMessage({ profileImage, name, message, timestamp, imageUrl, job }: ChatMessageProps) {

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
            </div>
        </div>
    );
}
