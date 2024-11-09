import React, { useEffect } from 'react'; // react의 R은 대문자로 작성
import "./projectBox.css";

type ProjectBoxProps = {
    progress: string;
    name: string;
    days: string;
};

export default function ProjectBox({ progress, name, days }: ProjectBoxProps) {
    const progressWrite = () => {
        const bar = document.getElementById("projectBox-progress-bar");
        if (bar) {
            bar.style.width = `${progress}%`;
        }
    };

    useEffect(() => {
        progressWrite();
    }, [progress]);

    return (
        <div className="left-sidebar-company projectBox-container">
            <h1>{name}</h1>
            <div>
                <p>{days} days remaining</p>
                <div className="projectBox-container-progress">
                    <div id="projectBox-progress-bar"></div>
                </div>
            </div>
        </div>
    );
}
