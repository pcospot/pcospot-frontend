import Header from '../components/header/header.tsx'
import ChatSidebar from "../components/chat/chatsidebar.tsx";
import RightSideServerBar from "../components/rightsidebar/rightSideServerBar/rightSideServerBar.tsx"
import '../design/pages/mainPage.css'
import RightSidePeopleBar from "../components/rightsidebar/rightSidePeopleBar/rightSidePeopleBar.tsx";
import ChatInput from "../components/chat/chatInput.tsx";
import ChatList from "../components/chat/chatList/chatList.tsx";
import "../components/chat/chatList/chatList.css"
import {Navigate, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import returnLogin from "../function/returnLogin.tsx";

type UserType = {
    id: number
    name: string
    online: boolean
    job: string
    img : string
}



export type {UserType}

function MainPage() {
    returnLogin()



    return (
        <>
            <Header/>
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

export default MainPage
