import { create } from 'zustand';

const useCalendarStore = create((set) => ({
    calendarRef: null, // 초기값 null로 설정
    setCalendarRef: (ref) => set({ calendarRef: ref }), // FullCalendar의 ref를 상태에 저장
    goToPrev: () => {
        set((state) => {
            if (state.calendarRef) {
                state.calendarRef.current.getApi().prev(); // FullCalendar API로 이전으로 이동
            }
        });
    },
    goToNext: () => {
        set((state) => {
            if (state.calendarRef) {
                state.calendarRef.current.getApi().next(); // FullCalendar API로 다음으로 이동
            }
        });
    },
}));

export default useCalendarStore;
