import Header from '../components/header.tsx'
import LeftSidebar from "../components/leftsidebar/leftsidebar.tsx";
import RightSideServerBar from "../components/rightsidebar/rightSideServerBar/rightSideServerBar.tsx"
import '../design/mainPage.css'
import RightSidePeopleBar from "../components/rightsidebar/rightSidePeopleBar/rightSidePeopleBar.tsx";
import ChatInput from "../components/chat/chatInput.tsx";
function MainPage() {

    return (
        <>
            <div className="mainPage">
                <LeftSidebar />
                <ChatInput/>
                <div style={{display: 'flex'}}>
                    <RightSidePeopleBar/>
                    <RightSideServerBar/>
                </div>
            </div>
        </>
    )
}

export default MainPage
