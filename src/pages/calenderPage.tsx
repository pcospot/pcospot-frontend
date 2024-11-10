import RightSideServerBar from "../components/rightsidebar/rightSideServerBar/rightSideServerBar.tsx";
import Calender from "../components/calender/calender.tsx";
import CalenderSideBar from "../components/calender/calenderSideBar.tsx";
import useCalendarStore from "../components/Stores/useCalendarStore.tsx";

export default function CalenderPage(){
    const calendarStore = useCalendarStore(state => state.calendarEvent);

    const schedule = calendarStore

    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <CalenderSideBar schedule={schedule}/>
            <Calender events={schedule}></Calender>
            <RightSideServerBar />
        </div>
    )
}