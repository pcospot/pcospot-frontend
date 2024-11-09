import RightSideServerBar from "../components/rightsidebar/rightSideServerBar/rightSideServerBar.tsx";
import Calender from "../components/calender/calender.tsx";
import ChatSidebar from "../components/chat/chatsidebar.tsx";

export default function CalenderPage(){
    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <ChatSidebar/>
            <Calender></Calender>
            <RightSideServerBar />
        </div>
    )
}