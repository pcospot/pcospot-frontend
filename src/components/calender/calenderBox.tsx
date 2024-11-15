import { useEffect, useState } from "react";
import useCalendarStore from "../Stores/useCalendarStore.tsx";
import "./calenderBox.css"
import arrowLeft from "../../assets/ArrowLeft.svg"
import arrowRight from "../../assets/ArrowRight.svg"

type calendarBoxProps = {
    schedule ?: any
}

export default function CalenderBox({schedule}: calendarBoxProps) {
    const calendarRef = useCalendarStore(state => state.calendarRef); // FullCalendar ref 가져오기
    const [currentMonth, setCurrentMonth] = useState<string | null>(null);
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    // 월 이름 배열
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // 현재 보이는 달과 연도를 가져오는 함수
    const updateCurrentMonthYear = () => {
        if (calendarRef && (calendarRef.getApi)) {
            const currentDate = calendarRef.getApi().getDate(); // 현재 날짜를 가져옴
            setCurrentMonth(monthNames[currentDate.getMonth()]); // 월 이름 설정
            setCurrentYear(currentDate.getFullYear());
        }
    };

    // 페이지 로드 시와 달력 이동 시에 월과 연도 업데이트
    useEffect(() => {
        updateCurrentMonthYear();
    }, [calendarRef]);

    const handlePrev = () => {
        if (calendarRef && calendarRef.getApi) {
            calendarRef.getApi().prev();
            updateCurrentMonthYear(); // 이전 달로 이동 후 업데이트
        }
    };

    const handleNext = () => {
        if (calendarRef && calendarRef.getApi) {
            calendarRef.getApi().next();
            updateCurrentMonthYear(); // 다음 달로 이동 후 업데이트
        }
    };

    console.log(schedule);

    return (
        <div className="calendarBox-container">
            <div className="calendarBox-month">
                <p>{currentMonth}</p>
                <div style={{display: "flex", gap: "8px"}}>
                    <button onClick={handlePrev}>
                        <img src={arrowLeft} alt="prev"/>
                    </button>
                    <button onClick={handleNext}>
                        <img src={arrowRight} alt="next"/>
                    </button>
                </div>
            </div>
            <p className="calendarBox-year">{currentYear}</p>
            <p className="calendarBox-schedule">You have {schedule.length} schedules</p>
        </div>
    );
}
