import React from 'react';
import {Link} from "react-router-dom";
import "../../design/leftsidebar.css";
import ProjectBox from "../project/projectBox";
import Menu from "../leftsidebar/menu.tsx";

export default function LeftSidebar() {
    const company = {
        name: 'Binford Ltd.',
        days: '27',
        progress: '70'
    };

    return (
        <div className="left-sidebar">
            <ProjectBox name={company.name} days={company.days} progress={company.progress}/>
            <button className="left-sidebar-google-meet">
                <p>Open Google Meet</p>
            </button>
            <div className="left-sidebar-menu">
                <Menu channel="notice" name="Notice" alarm={false} choose={false}></Menu>
                <Menu channel="chat" name="General" alarm={false} choose={true}></Menu>
                <Menu channel="chat" name="Project" alarm={true} choose={true}></Menu>
                <Menu channel="chat" name="Feedback" alarm={false} choose={false}></Menu>
                <Menu channel="schedule" name="Schedule" alarm={false} choose={true}></Menu>
                <Link to ="/scrum" style={{textDecoration: "none"}} onclick={() => {}}>
                    <Menu channel="scrum" name="Daily scrum" alarm={false} choose={false}></Menu>
                </Link>
            </div>
        </div>
    );
}
