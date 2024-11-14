import { Link, useLocation } from "react-router-dom";
import "./chatsidebar.css";
import ProjectBox from "../project/projectBox.tsx";
import Menu from "./menu.tsx";
import SmallProfile from "../people/smallProfile.tsx";
import profileImage from "../../assets/profile image.svg";
import setting from "../../assets/setting.svg";

export default function ChatSidebar() {
    const company = {
        name: 'Binford Ltd.',
        days: '27',
        progress: '70'
    };

    const people =
        {
            name: '한석규',
            online: true,
            job: 'Developer',
            img: profileImage
        }


    const location = useLocation(); // 현재 URL 경로 가져오기

    // 현재 경로에 따라 선택된 메뉴 설정
    const getSelectedMenu = (path: string) => location.pathname === path;

    return (
        <div className="left-sidebar">
            <div className="left-sidebar-content">
                <ProjectBox name={company.name} days={company.days} progress={company.progress}/>

                <div className="google-meet">
                    <div className="google-meet-time">
                        <h6>Open Google Meet</h6>
                        <p>Meet ongoing for X hrs</p>
                    </div>
                    <button>Join</button>
                </div>

                <div className="left-sidebar-menu">
                    <Link to="/chat" style={{textDecoration: "none"}}>
                        <Menu
                            channel="notice"
                            name="Notice"
                            alarm={false}
                            choose={getSelectedMenu("/notice")}
                        />
                    </Link>
                    <Link to="/chat" style={{textDecoration: "none"}}>
                        <Menu
                            channel="chat"
                            name="General"
                            alarm={false}
                            choose={getSelectedMenu("/general")}
                        />
                    </Link>
                    <Link to="/chat" style={{textDecoration: "none"}}>
                        <Menu
                            channel="chat"
                            name="Project"
                            alarm={true}
                            choose={getSelectedMenu("/project")}
                        />
                    </Link>
                    <Link to="/chat" style={{textDecoration: "none"}}>
                        <Menu
                            channel="chat"
                            name="Feedback"
                            alarm={false}
                            choose={getSelectedMenu("/feedback")}
                        />
                    </Link>
                    <Link to="/calender" style={{textDecoration: "none"}}>
                        <Menu
                            channel="schedule"
                            name="Schedule"
                            alarm={false}
                            choose={getSelectedMenu("/schedule")}
                        />
                    </Link>
                    <Link to="/scrum" style={{textDecoration: "none"}}>
                        <Menu
                            channel="scrum"
                            name="Daily scrum"
                            alarm={false}
                            choose={getSelectedMenu("/scrum")}
                        />
                    </Link>
                </div>

            </div>
            <div className="chat-sidebar-profile">
                <SmallProfile people={people}></SmallProfile>
                <Link to="/profile">
                    <img src={setting}/>
                </Link>
            </div>
        </div>
    );
}
