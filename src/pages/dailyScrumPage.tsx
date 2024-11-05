import LeftSidebar from "../components/leftsidebar/leftsidebar.tsx";
import RightSideServerBar from "../components/rightsidebar/rightSideServerBar/rightSideServerBar.tsx";
import RightSidePeopleBar from "../components/rightsidebar/rightSidePeopleBar/rightSidePeopleBar.tsx";
import ChatInput from "../components/chat/chatInput.tsx";
import "../design/dailyScrum.css"
export default function DailyScrumPage()  {
    return(
        <div className="dailyScrumPage-container">
            <LeftSidebar />
            <ChatInput/>
            <div style={{display:'flex'}}>
                <RightSidePeopleBar/>
                <RightSideServerBar/>
            </div>
        </div>
    )
}