import ChatSidebar from "../components/chat/chatsidebar.tsx";
import RightSideServerBar from "../components/rightsidebar/rightSideServerBar/rightSideServerBar.tsx";
import RightSidePeopleBar from "../components/rightsidebar/rightSidePeopleBar/rightSidePeopleBar.tsx";
import ChatInput from "../components/chat/chatInput.tsx";
import "../design/pages/dailyScrumPage.css"
export default function DailyScrumPage()  {
    return(
        <div className="dailyScrumPage-container">
            <ChatSidebar/>
            <div className="scrum-chat">
                <ChatInput/>
            </div>
            <div style={{display:'flex'}}>
                <RightSidePeopleBar/>
                <RightSideServerBar/>
            </div>
        </div>
    )
}