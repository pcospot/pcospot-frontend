import RightSideServerBar from "../components/rightsidebar/rightSideServerBar/rightSideServerBar.tsx";
import GlobalsideBar from "../components/global/GlobalsideBar.tsx";
import RecruitmentList from "../components/global/recruitmentList.tsx";
import "../design/pages/GlobalPage.css"

export default function GlobalPage() {
    return(
        <div className="GlobalPage-container">
            <GlobalsideBar />
            <RecruitmentList/>
            <RightSideServerBar/>
        </div>
    )
}