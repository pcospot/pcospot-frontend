import ChatSidebar from "../components/chat/chatsidebar.tsx";
import RightSideServerBar from "../components/rightsidebar/rightSideServerBar/rightSideServerBar.tsx";
import RightSidePeopleBar from "../components/rightsidebar/rightSidePeopleBar/rightSidePeopleBar.tsx";
import ChatInput from "../components/chat/chatInput.tsx";
import sparckle from "../assets/Sparkle.svg"
import {useEffect, useState} from "react";
import "../design/pages/dailyScrumPage.css"
import {UserType} from "./mainPage.tsx";
import ScrumBox from "../components/scrum/scrumBox.tsx";
import SprintBox from "../components/sprint/sprintBox.tsx";
export default function DailyScrumPage()  {
    const [scrumData, setScrumData] = useState();


    const scrumDataFetch = async() => {
        try {
            const res = await fetch("/scrum.json")
            const data = await res.json()
            setScrumData(data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        scrumDataFetch();
    }, []);

    return(
        <div className="dailyScrumPage-container">
            <ChatSidebar/>
            <div className="planning-container">
                <div style={{width:"98%", padding:"10px", display:"flex",justifyContent:"flex-end"}}>
                    <button className="planning-askAI">
                        <img src={sparckle} alt='sparckle'/>
                        Ask to AI
                    </button>
                </div>
                <div className="sprint-container">
                <h1 style={{alignSelf: "flex-start", fontSize: "20px"}}>Sprint</h1>
                    <div className="sprint-list">
                        <SprintBox/>
                    </div>
                </div>
                <div className="scrum-container">
                    <h1 style={{alignSelf:"flex-start",fontSize:"20px"}}>Daily Scrum</h1>
                    <div className="scrum-list">
                        {scrumData && (
                            <ScrumBox work={scrumData}/>
                        )}
                    </div>
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <RightSidePeopleBar/>
                <RightSideServerBar/>
            </div>
        </div>
    )
}