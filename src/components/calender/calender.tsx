import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // 추가
import "./calender.css";
import Modal from "../modal/modal.tsx";
import { useState, useEffect } from "react";

export default function Calender() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const dayFunction = (info) => {
        setSelectedDate(info.dateStr); // 클릭한 날짜를 저장
        setIsModalOpen(true); // 모달 열기
    };

    const closeModal = () => {
        setIsModalOpen(false); // 모달 닫기
    };

    // selectedDate가 변경될 때마다 콘솔에 출력

    return (
        <div id="calendar-container">
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]} // interactionPlugin 추가
                initialView="dayGridMonth"
                headerToolbar={{
                    start: "prev next",
                    end: 'today',
                }}
                height= "calc(100vh - 60px)"
                dayHeaderClassNames="calendar-header"
                events={[
                    { title: 'Event 1', date: '2024-06-01' },
                    { title: 'Event 2', date: '2024-11-07' },
                ]}
                dateClick={dayFunction} // 날짜 클릭 시 실행될 함수
                selectable={false} // 클릭 시 셀 강조 스타일 비활성화
            />

            {/* 모달 표시 여부 체크 */}
            {isModalOpen && (
                <Modal width="300px" height="300px" onOpen={true} onClose={closeModal} className="calender-modal">
                    <p>선택된 날짜: {selectedDate}</p>
                </Modal>
            )}
        </div>
    );
}
