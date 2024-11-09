import RightSideServerBar from "../components/rightsidebar/rightSideServerBar/rightSideServerBar.tsx";
import Calender from "../components/calender/calender.tsx";
import CalenderSideBar from "../components/calender/calenderSideBar.tsx";

export default function CalenderPage(){
    const schedule = [
        { title: '', date: '2024-11-01' },
        { title: 'Third-Party Content : Questions', date: '2024-11-07' },
    ]

    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <CalenderSideBar schedule={schedule}/>
            <Calender events={schedule}></Calender>
            <RightSideServerBar />
        </div>
    )
}