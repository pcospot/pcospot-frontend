import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../../design/rightSideServerBar.css";
import house from "../../../assets/House.svg";
import GlobalCircle from "../../../assets/GlobeSimple.svg";
import CheckCircle from "../../../assets/CheckCircle.svg";
import CalendarDots from "../../../assets/CalendarDots.svg";
import Plus from "../../../assets/Plus.svg";
import back from "../../../assets/back.svg";
import BarButton from "./barButton.tsx";
import ServerButton from "./serverButton.tsx";

export default function RightSideServerBar() {
    const [selectedServer, setSelectedServer] = useState<string | null>(null);
    const location = useLocation(); // 현재 URL 경로를 가져옴

    const servers = [
        { id: "server1", background: back, alarm: 100 },
        { id: "server2", background: back, alarm: 1 },
        { id: "server3", background: back, alarm: 10 },
        { id: "server4", background: back, alarm: 0, arcaived: true },
    ];

    // 현재 경로에 따라 선택된 BarButton 설정
    const getSelectedBar = () => {
        switch (location.pathname) {
            case "/chat":
                return "house";
            case "/global":
                return "chats";
            case "/check":
                return "check";
            case "/calender":
                return "calendar";
            case "/plus":
                return "plus";
            default:
                return null;
        }
    };

    const selectedBar = getSelectedBar();

    return (
        <div className="rightSideServerBar-container">
            <Link to="/chat">
                <BarButton
                    src={house}
                    background={false}
                    choose={selectedBar === "house"}
                />
            </Link>
            <Link to="/global">
                <BarButton
                    src={GlobalCircle}
                    background={false}
                    choose={selectedBar === "chats"}
                />
            </Link>
            <Link to="/calender">
                <BarButton
                    src={CalendarDots}
                    background={false}
                    choose={selectedBar === "calendar"}
                />
            </Link>
            {servers.map((item) => (
                <ServerButton
                    key={item.id}
                    background={item.background}
                    alarm={item.alarm}
                    arcaived={item.arcaived}
                    choose={selectedServer === item.id}
                    onClick={() => setSelectedServer(item.id)}
                />
            ))}
            <BarButton
                src={Plus}
                background={false}
                choose={selectedBar === "plus"}
            />
        </div>
    );
}
