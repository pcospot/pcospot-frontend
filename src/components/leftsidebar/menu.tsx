import newAlarm from "../../assets/Frame 13.svg";
import notice from "../../assets/speaker.svg";
import noticeNotAlarm from "../../assets/noticeNotChoose.svg";
import noticeChoose from "../../assets/noticeChoose.svg";
import chat from "../../assets/Frame 9.svg";
import chatAlarm from "../../assets/chatAlarm.svg";
import chatChoose from "../../assets/chatChoose.svg";
import schedule from "../../assets/shecule.svg";
import scheduleNotAlarm from "../../assets/scheduleNotChoose.svg";
import scheduleChoose from "../../assets/scheduleChoose.svg";
import scrum from "../../assets/scrum.svg";
import scrumNotAlarm from "../../assets/scrumNotChoose.svg";
import scrumChoose from "../../assets/scrumChoose.svg";
import "../chat/leftsidebar.css";

type menuProps = {
    channel: string;
    name: string;
    alarm: boolean;
    choose: boolean;
};

export default function Menu({ channel, name, alarm, choose }: menuProps) {
    // 채널에 따른 아이콘 선택
    const getChannelIcon = () => {
        switch (channel) {
            case 'notice':
                return choose ? noticeChoose : (alarm ? notice : noticeNotAlarm);
            case 'chat':
                return choose ? chatChoose: (alarm ? chatAlarm : chat);
            case 'schedule':
                return choose ? scheduleChoose : (alarm ? schedule : scheduleNotAlarm);
            case 'scrum':
                return choose ? scrumChoose : (alarm ? scrum : scrumNotAlarm);
            default:
                return undefined;
        }
    };

    return (
        <div className="left-sidebar-menu-list">
            <div className="left-sidebar-menu-item">
                <p style={{ color: alarm && !choose ? '#FF5151' : '#111111', fontSize: '20px' }}>•</p>
                {getChannelIcon() && (
                    <img src={getChannelIcon()} alt={channel}  />
                )}
                <h2
                    style={{
                        fontSize: '12px',
                        color: choose ? '#00E984' : alarm ? '#FFFFFF' : '#919191',
                        fontWeight: choose ? 'bold' : 'normal'
                    }}
                >
                    {name}
                </h2>
            </div>
            {alarm && !choose && <img src={newAlarm} alt="newAlarm" />}
        </div>
    );
}
