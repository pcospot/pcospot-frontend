import { Link, useLocation } from "react-router-dom";
import "./chatsidebar.css";
import ProjectBox from "../project/projectBox.tsx";
import image from "../../assets/ImagesSquare.svg";
import Menu from "./menu.tsx";
import SmallProfile from "../people/smallProfile.tsx";
import X from "../../assets/X.svg";
import profileImage from "../../assets/profile image.svg";
import setting from "../../assets/setting.svg";
import Modal from "../modal/modal.tsx";
import { useState } from "react";

export default function ChatSidebar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");

    const company = {
        name: 'Binford Ltd.',
        days: '27',
        progress: '70'
    };

    const people = {
        name: '한석규',
        online: true,
        job: 'Developer',
        img: profileImage
    };

    const location = useLocation(); // 현재 URL 경로 가져오기
    const modalOpen = () => {
        setIsModalOpen(true);
        const chatElement = document.getElementsByClassName('chat')[0] as HTMLElement;
        chatElement.className += ' blur';
        const chatInputContainer = document.getElementsByClassName('chatInput-container')[0] as HTMLElement;
        chatInputContainer.style.top = "82vh";
    };

    const modalClose = () => {
        setIsModalOpen(false);
        const chatElement = document.getElementsByClassName("chat")[0] as HTMLElement;
        chatElement.classList.remove('blur');
        const chatInputContainer = document.getElementsByClassName('chatInput-container')[0] as HTMLElement;
        chatInputContainer.style.top = "88vh";
    };

    const getSelectedMenu = (path: string) => location.pathname === path;

    return (
        <>
            <div className="left-sidebar">
                <div className="left-sidebar-content">
                    <ProjectBox name={company.name} days={company.days} progress={company.progress} />

                    <div className="google-meet">
                        <div className="google-meet-time">
                            <h6>Open Google Meet</h6>
                            <p>Meet ongoing for X hrs</p>
                        </div>
                        <button>Join</button>
                    </div>

                    <div className="left-sidebar-menu">
                        <Link to="/chat" style={{ textDecoration: "none" }}>
                            <Menu
                                channel="notice"
                                name="Notice"
                                alarm={false}
                                choose={getSelectedMenu("/notice")}
                            />
                        </Link>
                        <Link to="/chat" style={{ textDecoration: "none" }}>
                            <Menu
                                channel="chat"
                                name="General"
                                alarm={false}
                                choose={getSelectedMenu("/general")}
                            />
                        </Link>
                        <Link to="/chat" style={{ textDecoration: "none" }}>
                            <Menu
                                channel="chat"
                                name="Project"
                                alarm={true}
                                choose={getSelectedMenu("/project")}
                            />
                        </Link>
                        <Link to="/chat" style={{ textDecoration: "none" }}>
                            <Menu
                                channel="chat"
                                name="Feedback"
                                alarm={false}
                                choose={getSelectedMenu("/feedback")}
                            />
                        </Link>
                        <Link to="/calender" style={{ textDecoration: "none" }}>
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
                <div className="chat-sidebar-profile">
                    <SmallProfile people={people}></SmallProfile>
                    <img src={setting} onClick={modalOpen} />
                </div>
            </div>
            <Modal width="850px" height="725px" onOpen={isModalOpen} onClose={modalClose} className="chatsidebar-modal-container">
                <div className="head">
                    <h1>My profile</h1>
                    <button>
                        <img src={X} onClick={modalClose} />
                    </button>
                </div>
                <div className="display-name">
                    <h3>Display Name</h3>
                    <input onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div className="about-me">
                    <h3>About me</h3>
                    <input />
                </div>
                <div className="prevNimage">
                    <div style={{ width: '393px' }}>
                        <h3 style={{ marginBottom: "8px" }}>Preview</h3>
                        <div className="prev">
                            <img src={profileImage} />
                            <p>{name}</p>
                        </div>
                    </div>
                    <div>
                        <h3 style={{ marginBottom: "8px" }}>Avatar upload</h3>
                        <label htmlFor="file">
                            <div className="addimage">
                                <img src={image} style={{ marginBottom: "4px" }} />
                                <p style={{ fontSize: "16px", color: "#919191" }}>Drag or select a photo to upload</p>
                            </div>
                        </label>
                        <input
                            type="file"
                            id="file"
                        />
                    </div>
                </div>
                <div className="buttons">
                    <button className="delete">Delete Account</button>
                    <div className="resetNsave">
                        <button className="reset">reset</button>
                        <button className="save">save Changes</button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
