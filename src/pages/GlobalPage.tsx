import RightSideServerBar from "../components/rightsidebar/rightSideServerBar/rightSideServerBar.tsx";
import GlobalsideBar from "../components/global/GlobalsideBar.tsx";
import RecruitmentList from "../components/global/recruitmentList.tsx";
import "../design/pages/GlobalPage.css"
import returnLogin from "../function/returnLogin.tsx";
import Header from "../components/header/header.tsx";
import {useState} from "react";

export default function GlobalPage() {

    returnLogin()
    const [isSidebarVisible, setIsSidebarVisible] = useState(true); // 사이드바 표시 여부 상태

    const toggleSidebar = () => {
        setIsSidebarVisible(prevState => !prevState);

        const recruitmentListcon = document.querySelector(".recruitmentList-container") as HTMLElement;
        if (recruitmentListcon) {
            recruitmentListcon.style.width = isSidebarVisible ? "calc(100vw - 60px)" : "100%";
        }
    };

    return(
        <><Header onToggleSidebar={toggleSidebar} />
            <div className="GlobalPage-container">
                {isSidebarVisible && (<GlobalsideBar/>)}
                <RecruitmentList/>
                <RightSideServerBar/>
            </div>
        </>

    )
}