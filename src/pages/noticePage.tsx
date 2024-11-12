import ChatSidebar from "../components/chat/chatsidebar.tsx";
import ChatList from "../components/chat/chatList/chatList.tsx";
import ChatInput from "../components/chat/chatInput.tsx";
import RightSidePeopleBar from "../components/rightsidebar/rightSidePeopleBar/rightSidePeopleBar.tsx";
import RightSideServerBar from "../components/rightsidebar/rightSideServerBar/rightSideServerBar.tsx";

export default function NoticePage(){
    return (
        <>
            <div className="mainPage">
                <ChatSidebar/>
                <div className="chat">
                    <ChatList>
                        <ChatInput/>
                    </ChatList>
                </div>
                <div style={{display: 'flex'}}>
                    <RightSidePeopleBar/>
                    <RightSideServerBar/>
                </div>
            </div>
        </>
    )
}