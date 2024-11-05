
import"../../../design/rightSideServerBar.css"
import house from "../../../assets/House.svg"
import ChatsTeardrop from "../../../assets/ChatsTeardrop.svg"
import CheckCircle from "../../../assets/CheckCircle.svg"
import CalendarDots from "../../../assets/CalendarDots.svg"
import Plus from "../../../assets/Plus.svg"
import back from "../../../assets/back.svg"
import BarButton from "./barButton.tsx";
export default function RightSideServerBar() {
    return (
        <div className="rightSideServerBar-container">
            <BarButton src={house} choose={true} background={false}/>
            <BarButton src={ChatsTeardrop} choose={false} background={false}/>
            <BarButton src={CheckCircle} choose={false} background={false}/>
            <BarButton src={CalendarDots} choose={false} background={false}/>
            <BarButton src={back} choose={false} background={true} alarm={100}/>
            <BarButton src={back} choose={false} background={true} alarm={1}/>
            <BarButton src={back} choose={false} background={true} alarm={10}/>
            <BarButton src={back} choose={false} background={true} />
            <BarButton src={back} choose={false} background={true} arcaived = {true}/>
            <BarButton src={Plus} choose={false} background={false}/>
        </div>
    )
}