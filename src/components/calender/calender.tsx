import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import "./calender.css";
import Modal from "../modal/modal.tsx";
import { useState, useEffect, useRef } from "react";
import useCalendarStore from "../Stores/useCalendarStore.tsx";

type calenderProps = {
    events: any
};

export default function Calender({ events }: calenderProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const calendarRef = useRef(null);

    const setCalendarRef = useCalendarStore(state => state.setCalendarRef);// zustand 상태 설정 함수

    useEffect(() => {
        // DOM이 완전히 렌더링된 후에만 calendarRef 상태를 zustand에 설정
        if (calendarRef.current) {
            setCalendarRef(calendarRef.current);
        }
    }, [calendarRef.current]);

    console.log(calendarRef)// useEffect는 calendarRef.current의 변경 사항을 관찰합니다.

    const dayFunction = (info) => {
        setSelectedDate(info.dateStr); // 클릭한 날짜를 저장
        setIsModalOpen(true); // 모달 열기
    };

    const closeModal = () => {
        setIsModalOpen(false); // 모달 닫기
    };

    return (
        <div id="calendar-container">
            <FullCalendar
                ref={calendarRef} // FullCalendar 컴포넌트에 ref를 전달
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                    start: "prev next",
                    end: 'today',
                }}
                height="calc(100vh - 60px)"
                dayHeaderClassNames="calendar-header"
                events={events}
                dateClick={dayFunction}
                selectable={false}
            />
            {isModalOpen && (
                <Modal width="300px" height="300px" onOpen={true} onClose={closeModal} className="calender-modal">
                    <p>선택된 날짜: {selectedDate}</p>
                </Modal>
            )}
        </div>
    );
}
