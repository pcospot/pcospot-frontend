import "../chat/chatsidebar.css";
import { useEffect, useState } from "react";
import NotificationBox from "../notification/notificationBox.tsx";
import "./GlobalsideBar.css"

export default function GlobalsideBar() {
    const [jsonData, setJsonData] = useState<any>(null);

    const newAlarmFetch = async () => {
        try {
            const res = await fetch("/newAlarm.json");
            const data = await res.json();
            return data;
        } catch (err) {
            console.error("Error:", err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await newAlarmFetch();
            setJsonData(data);
        };
        fetchData();
    }, []);

    return (
        <div className="GlobalSideBar-container">
            <h1>Recent notifications</h1>
            <div style={{display:"flex", flexDirection:"column", gap:"16px"}}>
                {jsonData && (
                    <NotificationBox json={jsonData} company="Binford Ltd." />
                )}
                {jsonData && (
                    <NotificationBox json={jsonData} company="IBM" />
                )}
            </div>

        </div>
    );
}
