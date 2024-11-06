import {create} from "zustand";

type TextState = {
    message : string | null;
    setMessage : (newText: string | null) => void;
}

export const useMessageStore = create<TextState>((set) => ({
    message: null,
    setMessage: newText => set({ message: newText }),
}))