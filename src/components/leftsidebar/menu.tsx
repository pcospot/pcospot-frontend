import speaker from "../../assets/speaker.svg";
import newAlarm from "../../assets/Frame 13.svg";
import chat from "../../assets/Frame 9.svg";
import schedule from "../../assets/shecule.svg"
import chatAlarm from "../../assets/chatAlarm.svg";
import scheduleNotChoose from "../../assets/scheduleNotChoose.svg";
import noticeNotChoose from "../../assets/noticeNotChoose.svg";
import scrum from "../../assets/scrum.svg";
import scrumNotChoose from "../../assets/scrumNotChoose.svg";
import React from "react";
import "../../design/leftsidebar.css";

type menuProps = {
    channel: string;
    name: string;
    alarm: boolean;
    choose : boolean;
};

export default function Menu({ channel, name, alarm, choose }: menuProps) {
    const getChannelIcon = () => {
        switch (channel) {
            case 'notice':
                if (alarm){
                    return speaker;}
                else{
                    return noticeNotChoose;
                }
            case 'chat':
                if (alarm){
                    return chatAlarm;
                }
                else{
                    return chat;
                }
            case 'schedule':
                if (alarm) {
                    return schedule;
                }
                else{
                    return scheduleNotChoose;
                }
            case 'scrum' :
                if (alarm){
                    return scrum;
                }else{
                    return scrumNotChoose;
                }
            default:
                return undefined;
        }
    };

    return (
        <div className="left-sidebar-menu-list">
            <div className="left-sidebar-menu-item">
                <p style={{ color: alarm ? '#FF5151' : '#111111', fontSize: '20px' }}>•</p>
                {getChannelIcon() && <img src={getChannelIcon()} alt={channel} />}
                <h1 style={{color:alarm ? '#FFFFFF' : '#919191'}}>{name}</h1>
            </div>
            {alarm && <img src={newAlarm} alt="newAlarm" />}
        </div>
    );
}
