import Header from '../components/header.tsx'
import LeftSidebar from "../components/leftsidebar/leftsidebar.tsx";
import RightSideServerBar from "../components/rightsidebar/rightSideServerBar/rightSideServerBar.tsx"
import '../design/mainPage.css'
import RightSidePeopleBar from "../components/rightsidebar/rightSidePeopleBar/rightSidePeopleBar.tsx";
import ChatInput from "../components/chat/chatInput.tsx";
import ChatList from "../components/chat/chatList/chatList.tsx";
import "../components/chat/chatList/chatList.css"
function MainPage() {

    return (
        <>
            <div className="mainPage">
                <LeftSidebar />
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

export default MainPage
