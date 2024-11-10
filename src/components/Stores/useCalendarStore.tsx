// useCalendarStore.tsx
import { create } from 'zustand';

const useCalendarStore = create((set) => ({
    calendarRef: null,
    setCalendarRef: (ref) => set({ calendarRef: ref }),
    calendarEvent: [
        { title: 'Binford Ltd.', message: "sprint", date: '2024-11-01' },
        { title: 'Astro', message: 'daily scrum 1', date: '2024-11-07' },
    ],
    setCalendarEvent: (newEvents) => set((state) => ({ calendarEvent: newEvents })),
}));

export default useCalendarStore;
