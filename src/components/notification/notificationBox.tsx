import "./notificationBox.css";
import { useEffect } from "react";

type NotificationBoxProps = {
    json: any;
    company: string;
};

export default function NotificationBox({ json, company }: NotificationBoxProps) {
    const notifications = json[company];

    const getJobClass = (job: string) => {
        if (job === 'Designer') {
            return 'designer-job';
        } else if (job === 'Developer') {
            return 'developer-job';
        }
        return '';
    }

    const truncateMessage = (message: string) => {
        return message.length > 60 ? message.slice(0, 60) + '...' : message;
    };

    return (
        <div className="notificationBox-container">
            <p style={{fontSize:"14px", color:"white", alignSelf:"flex-start", marginBottom:"5px"}}>{company}</p>
            <div className="notificationBox-contents">
                {Object.keys(notifications).map((key) => {
                    const notification = notifications[key];
                    return (
                        <div key={key} className="notificationBox-content">
                            <div className="notificationBox-content-nameNchannel">
                                <p className={getJobClass(notification.job)}>●</p>
                                <h2>{notification.people}</h2>
                                <h3># {notification.channel}</h3>
                            </div>
                            <p>{truncateMessage(notification.message)}</p>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
