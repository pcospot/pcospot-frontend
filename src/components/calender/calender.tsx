import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import "./calender.css";
import Modal from "../modal/modal.tsx";
import { useState, useEffect, useRef } from "react";
import useCalendarStore from "../Stores/useCalendarStore.tsx";

type CalendarProps = {
    events: { title: string; date: string }[];
};

export default function Calendar({ events }: CalendarProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const calendarRef = useRef(null);

    const setCalendarRef = useCalendarStore(state => state.setCalendarRef);
    const calendarEventStore = useCalendarStore(state => state.calendarEvent);

    useEffect(() => {
        if (calendarRef.current) {
            setCalendarRef(calendarRef.current);
        }
    }, [calendarRef, setCalendarRef]);

    const dayFunction = (info: { dateStr: string }) => {
        setSelectedDate(info.dateStr);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const eventsBorderFunction = () => {
        const eventsElements = document.getElementsByClassName('fc-event');
        const eventTitles = document.getElementsByClassName('fc-event-title');

        for (let i = 0; i < eventsElements.length; i++) {
            const eventTitle = eventTitles[i]?.innerHTML;

            switch (eventTitle) {
                case 'Binford Ltd.':
                    eventsElements[i].style.borderLeft = '3px solid #2982FF';
                    break;
                case 'Astro':
                    eventsElements[i].style.borderLeft = '3px solid #FFC229';
                    break;
                default:
                    eventsElements[i].style.borderLeft = '3px solid #919191';
            }
        }
    };

    const getModalEvents = (date: string) => {
        return events.filter(event => event.date === date);
    };

    useEffect(() => {
        eventsBorderFunction();
    }, [calendarEventStore, events]);

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
                height="calc(100vh - 60px - 2rem)"
                dayHeaderClassNames="calendar-header"
                events={events}
                dateClick={dayFunction}
                selectable={false}
                eventsSet={eventsBorderFunction}
                dayMaxEventRows={true}
                moreLinkText={(num) => `+${num} more`}
            />
            {isModalOpen && (
                <Modal width="300px" height="300px" onOpen={true} onClose={closeModal} className="calender-modal">
                    <p>선택된 날짜: {selectedDate}</p>
                    <div>
                        {getModalEvents(selectedDate || "").map((event, index) => (
                            <p key={index}>{event.title} {event.message}</p>
                        ))}
                    </div>
                </Modal>
            )}
        </div>
    );
}
