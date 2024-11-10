// emojiStore.ts
import { create } from 'zustand';

type EmojiStore = {
    emojis: { [key: string]: string[] }; // each message ID maps to an array of emojis
    addEmoji: (id: string, emoji: string) => void;
};

const useEmojiStore = create<EmojiStore>((set) => ({
    emojis: {},
    addEmoji: (id, emoji) => set((state) => ({
        emojis: {
            ...state.emojis,
            [id]: [...(state.emojis[id] || []), emoji]
        }
    }))
}));

export default useEmojiStore;
