import { useState } from 'react';
import ChatSidebar from "../components/chat/chatsidebar.tsx";
import RightSideServerBar from "../components/rightsidebar/rightSideServerBar/rightSideServerBar.tsx";
import '../design/pages/mainPage.css';
import RightSidePeopleBar from "../components/rightsidebar/rightSidePeopleBar/rightSidePeopleBar.tsx";
import ChatInput from "../components/chat/chatInput.tsx";
import ChatList from "../components/chat/chatList/chatList.tsx";
import "../components/chat/chatList/chatList.css";
import returnLogin from "../function/returnLogin.tsx";
import Header from "../components/header/header.tsx";

type UserType = {
    id: number;
    name: string;
    online: boolean;
    job: string;
    img: string;
}

export type { UserType }

function ChatPage() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true); // 사이드바 표시 여부 상태

    // 사이드바 토글 함수
    const toggleSidebar = () => {
        setIsSidebarVisible(prevState => !prevState);
    };

    returnLogin();

    return (
        <>
            <Header onToggleSidebar={toggleSidebar} />
            <div className="mainPage">
                {isSidebarVisible && <ChatSidebar />} {/* 사이드바 표시 여부에 따라 렌더링 */}
                <div className="chat">
                    <ChatList>
                        <ChatInput />
                    </ChatList>
                </div>
                <div style={{ display: 'flex' }}>
                    <RightSidePeopleBar />
                    <RightSideServerBar />
                </div>
            </div>
        </>
    );
}

export default ChatPage;
