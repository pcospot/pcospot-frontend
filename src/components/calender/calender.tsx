import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import "./calender.css";
import Modal from "../modal/modal.tsx";
import { useState, useEffect, useRef } from "react";
import useCalendarStore from "../Stores/useCalendarStore.tsx";

type calenderProps = {
    events: any;
};

export default function Calender({ events }: calenderProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const calendarRef = useRef(null);

    const setCalendarRef = useCalendarStore(state => state.setCalendarRef);
    const calendarEventStore = useCalendarStore(state => state.calendarEvent);

    useEffect(() => {
        if (calendarRef.current) {
            setCalendarRef(calendarRef.current);
        }
    }, [calendarRef.current]);

    const dayFunction = (info) => {
        setSelectedDate(info.dateStr);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const eventsBorderFunction = () => {
        const events = document.getElementsByClassName('fc-event');
        const eventTitles = document.getElementsByClassName('fc-event-title');

        for (let i = 0; i < events.length; i++) {
            const eventTitle = eventTitles[i]?.innerHTML;

            switch (eventTitle) {
                case 'Binford Ltd.':
                    events[i].style.borderLeft = '3px solid #2982FF';
                    break;
                case 'Astro':
                    events[i].style.borderLeft = '3px solid #FFC229';
                    break;
                default:
                    events[i].style.borderLeft = '3px solid #919191';
            }
        }
    };

    useEffect(() => {
        eventsBorderFunction();
    }, [calendarEventStore]);

    return (
        <div id="calendar-container">
            <FullCalendar
                ref={calendarRef}
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
                eventsSet={eventsBorderFunction}
                dayMaxEventRows={true} // 셀의 높이를 고정하고 일정이 많을 때 +N more 표시
                moreLinkText={(num) => `+${num} more`} // "more" 링크 텍스트 커스터마이징
            />
            {isModalOpen && (
                <Modal width="300px" height="300px" onOpen={true} onClose={closeModal} className="calender-modal">
                    <p>선택된 날짜: {selectedDate}</p>
                </Modal>
            )}
        </div>
    );
}
