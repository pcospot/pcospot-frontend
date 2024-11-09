import LeftSidebar from "../components/leftsidebar/leftsidebar.tsx";
import RightSideServerBar from "../components/rightsidebar/rightSideServerBar/rightSideServerBar.tsx"
import '../design/pages/mainPage.css'
import RightSidePeopleBar from "../components/rightsidebar/rightSidePeopleBar/rightSidePeopleBar.tsx";
import ChatInput from "../components/chat/chatInput.tsx";
import ChatList from "../components/chat/chatList/chatList.tsx";
import "../components/chat/chatList/chatList.css"

type UserType = {
    id: number
    name: string
    online: boolean
    job: string
    img : string
}

export type {UserType}

function GeneralPage() {

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

export default GeneralPage;
