
import "./chatMessage.css"

type ChatMessageProps = {
    profileImage : string,
    name : string,
    message : string,
    imageUrl ?: string,
    timestamp : string,
    job : string,
    emotion ?: any
}

export default function ChatMessage({ profileImage, name, message, timestamp, imageUrl, job, emotion }: ChatMessageProps) {
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
                                <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
