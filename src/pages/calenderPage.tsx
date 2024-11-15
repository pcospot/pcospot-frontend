import RightSideServerBar from "../components/rightsidebar/rightSideServerBar/rightSideServerBar.tsx";
import Calender from "../components/calender/calender.tsx";
import CalenderSideBar from "../components/calender/calenderSideBar.tsx";
import useCalendarStore from "../components/Stores/useCalendarStore.tsx";
import returnLogin from "../function/returnLogin.tsx";
import Header from "../components/header/header.tsx";

export default function CalenderPage(){
    const calendarStore = useCalendarStore(state => state.calendarEvent);
    returnLogin()
    const schedule = calendarStore

    return(
        <>
            <Header/>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <CalenderSideBar schedule={schedule}/>
                <Calender events={schedule}></Calender>
                <RightSideServerBar />
            </div>
        </>
    )
}