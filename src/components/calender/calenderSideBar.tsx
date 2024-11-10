// CalendarSideBar.tsx
import React, { useState } from "react";
import CalenderBox from "./calenderBox.tsx";
import "./calendarsideBar.css";
import useCalendarStore from "../Stores/useCalendarStore.tsx";
import Modal from "../modal/modal.tsx";

type calenderSideBarProps = {
    schedule?: any;
};

const company = ['Binford Ltd.', 'Astro', 'Notion', 'Google Calender'];

export default function CalenderSideBar({ schedule }: calenderSideBarProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({ title: '', message: '', date: '' });
    const caledalEventStore = useCalendarStore(state => state.calendarEvent);
    const setCalendarEvent = useCalendarStore(state => state.setCalendarEvent);

    const styleSet = (company) => {
        switch (company) {
            case 'Binford Ltd.': return '#2982FF';
            case 'Astro': return '#FFC229';
            case 'Notion': return '#FF5151';
            case 'Google Calender': return '#00E984';
            default: return '#FFFFFF';
        }
    };

    const closeModal = () => setIsModalOpen(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEvent({ ...newEvent, [name]: value });
    };

    const addEvent = () => {
        // 기존의 이벤트 배열에 새로운 이벤트를 추가하여 상태 업데이트
        setCalendarEvent([...caledalEventStore, newEvent]);
        setNewEvent({ title: '', message: '', date: '' }); // 입력 필드 초기화
        closeModal();
    };

    return (
        <div className="calendarsideBar-container">
            <CalenderBox schedule={schedule} />
            <button className="calendarsideBar-button" onClick={() => setIsModalOpen(true)}>Add Events</button>
            {isModalOpen && (
                <Modal className="calendarsideBar-modal" width="400px" height="400px" onOpen={true} onClose={closeModal}>
                    <div className="modal-content">
                        <h3>Add New Event</h3>
                        <input type="text" name="title" placeholder="Event Title" value={newEvent.title} onChange={handleInputChange} />
                        <input type="text" name="message" placeholder="Message" value={newEvent.message} onChange={handleInputChange} />
                        <input type="date" name="date" value={newEvent.date} onChange={handleInputChange} />
                        <button onClick={addEvent}>Add Event</button>
                        <button onClick={closeModal}>Cancel</button>
                    </div>
                </Modal>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: "flex-start", width: '218px', gap: "12px" }}>
                {company.map(company => (
                    <div key={company} style={{ display: 'flex', gap: "4px", alignItems: "center", justifyContent: "center" }}>
                        <p style={{ fontSize: "12px", color: styleSet(company) }}>●</p>
                        <p style={{ color: "white", fontSize: "12px" }}>{company}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
