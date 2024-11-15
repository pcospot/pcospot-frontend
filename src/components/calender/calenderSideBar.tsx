import { useState, ChangeEvent } from "react";
import CalenderBox from "./calenderBox";
import "./calendarsideBar.css";
import useCalendarStore from "../Stores/useCalendarStore";
import Modal from "../modal/modal";

type CalendarEvent = {
    title: string;
    message: string;
    date: string;
};

type CalendarSideBarProps = {
    schedule?: any;
};

const company = ['Binford Ltd.', 'Astro', 'Notion', 'Google Calendar'];

export default function CalendarSideBar({ schedule }: CalendarSideBarProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newEvent, setNewEvent] = useState<CalendarEvent>({ title: '', message: '', date: '' });

    // Zustand 상태 접근 시 타입 지정
    const calendarEventStore = useCalendarStore((state) => state.calendarEvent);
    const setCalendarEvent = useCalendarStore((state) => state.setCalendarEvent);

    const styleSet = (company: string) => {
        switch (company) {
            case 'Binford Ltd.': return '#2982FF';
            case 'Astro': return '#FFC229';
            case 'Notion': return '#FF5151';
            case 'Google Calendar': return '#00E984';
            default: return '#FFFFFF';
        }
    };

    const closeModal = () => setIsModalOpen(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewEvent({ ...newEvent, [name]: value });
    };

    const addEvent = () => {
        if (newEvent.title && newEvent.date) {
            setCalendarEvent([...calendarEventStore, newEvent]);
            setNewEvent({ title: '', message: '', date: '' });
            closeModal();
        }
    };

    return (
        <div className="calendarsideBar-container">
            <CalenderBox schedule={schedule} />
            <button className="calendarsideBar-button" onClick={() => setIsModalOpen(true)}>Add Events</button>

            {isModalOpen && (
                <Modal className="calendarsideBar-modal" width="600px" height="600px" onOpen={true} onClose={closeModal}>
                    <div className="modal-content">
                        <h3>Add New Event</h3>
                        <input
                            type="text"
                            name="title"
                            placeholder="Event Title"
                            value={newEvent.title}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="message"
                            placeholder="Message"
                            value={newEvent.message}
                            onChange={handleInputChange}
                        />
                        <input
                            type="date"
                            name="date"
                            value={newEvent.date}
                            onChange={handleInputChange}
                        />
                        <div className="buttons">
                            <button onClick={closeModal} className="close-modal-button">Cancel</button>
                            <button onClick={addEvent} className="add-event-button">Add Event</button>
                        </div>
                    </div>
                </Modal>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: "flex-start", width: '218px', gap: "12px" }}>
                {company.map((company) => (
                    <div key={company} style={{ display: 'flex', gap: "4px", alignItems: "center", justifyContent: "center" }}>
                        <p style={{ fontSize: "12px", color: styleSet(company) }}>●</p>
                        <p style={{ color: "white", fontSize: "12px" }}>{company}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
