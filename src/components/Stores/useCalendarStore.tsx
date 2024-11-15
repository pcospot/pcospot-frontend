import { create } from 'zustand';
import FullCalendar from "@fullcalendar/react";

type CalendarEvent = {
    title: string;
    message: string;
    date: string;
};

type CalendarStore = {
    calendarRef: FullCalendar| null;
    setCalendarRef: (ref: FullCalendar | null) => void;
    calendarEvent: CalendarEvent[];
    setCalendarEvent: (newEvents: CalendarEvent[]) => void;
};

const useCalendarStore = create<CalendarStore>((set) => ({
    calendarRef: null,
    setCalendarRef: (ref) => set({ calendarRef: ref }),
    calendarEvent: [
        { title: 'Binford Ltd.', message: 'sprint', date: '2024-11-01' },
        { title: 'Astro', message: 'daily scrum 1', date: '2024-11-07' },
    ],
    setCalendarEvent: (newEvents) =>
        set(() => ({ calendarEvent: newEvents })),
}));

export default useCalendarStore;
