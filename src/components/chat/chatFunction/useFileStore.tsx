import { create } from 'zustand';

type FileState = {
    file: File | null;
    setFile: (newFile: File | null) => void;
};

export const useFileStore = create<FileState>((set) => ({
    file: null,
    setFile: (newFile) => set({ file: newFile }),
}));
