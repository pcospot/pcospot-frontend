import { create } from 'zustand';

type EmojiStore = {
    emojis: { [key: string]: string[] }; // 각 메시지 ID가 이모지 배열을 매핑
    addEmoji: (id: string, emoji: string) => void;
    removeEmoji: (id: string, emoji: string) => void;
};

const useEmojiStore = create<EmojiStore>((set) => ({
    emojis: {},
    // 이모지 추가 함수
    addEmoji: (id, emoji) => set((state) => ({
        emojis: {
            ...state.emojis,
            [id]: [...(state.emojis[id] || []), emoji],
        },
    })),
    // 특정 이모지만 제거하는 함수
    removeEmoji: (id, emoji) => set((state) => {
        const updatedEmojis = { ...state.emojis };
        if (updatedEmojis[id]) {
            updatedEmojis[id] = updatedEmojis[id].filter((e) => e !== emoji);
            if (updatedEmojis[id].length === 0) delete updatedEmojis[id]; // 배열이 비면 키 삭제
        }
        return { emojis: updatedEmojis };
    }),
}));

export default useEmojiStore;
