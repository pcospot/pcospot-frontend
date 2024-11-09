import { Link, useLocation } from "react-router-dom";
import "../../design/leftsidebar.css";
import ProjectBox from "../project/projectBox";
import Menu from "../leftsidebar/menu.tsx";

export default function LeftSidebar() {
    const company = {
        name: 'Binford Ltd.',
        days: '27',
        progress: '70'
    };

    const location = useLocation(); // 현재 URL 경로 가져오기

    // 현재 경로에 따라 선택된 메뉴 설정
    const getSelectedMenu = (path: string) => location.pathname === path;

    return (
        <div className="left-sidebar">
            <ProjectBox name={company.name} days={company.days} progress={company.progress} />

            <button className="left-sidebar-google-meet">
                <p>Open Google Meet</p>
            </button>

            <div className="left-sidebar-menu">
                <Link to="/notice" style={{ textDecoration: "none" }}>
                    <Menu
                        channel="notice"
                        name="Notice"
                        alarm={false}
                        choose={getSelectedMenu("/notice")}
                    />
                </Link>
                <Link to="/general" style={{ textDecoration: "none" }}>
                    <Menu
                        channel="chat"
                        name="General"
                        alarm={false}
                        choose={getSelectedMenu("/general")}
                    />
                </Link>
                <Link to="/project" style={{ textDecoration: "none" }}>
                    <Menu
                        channel="chat"
                        name="Project"
                        alarm={true}
                        choose={getSelectedMenu("/project")}
                    />
                </Link>
                <Link to="/feedback" style={{ textDecoration: "none" }}>
                    <Menu
                        channel="chat"
                        name="Feedback"
                        alarm={false}
                        choose={getSelectedMenu("/feedback")}
                    />
                </Link>
                <Link to="/schedule" style={{ textDecoration: "none" }}>
                    <Menu
                        channel="schedule"
                        name="Schedule"
                        alarm={false}
                        choose={getSelectedMenu("/schedule")}
                    />
                </Link>
                <Link to="/scrum" style={{ textDecoration: "none" }}>
                    <Menu
                        channel="scrum"
                        name="Daily scrum"
                        alarm={false}
                        choose={getSelectedMenu("/scrum")}
                    />
                </Link>
            </div>
        </div>
    );
}
