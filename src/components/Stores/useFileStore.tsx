import { create } from 'zustand';

type FileState = {
    files: File[]; // 여러 파일을 저장할 수 있도록 배열로 변경
    setFiles: (newFiles: File[]) => void;
};

export const useFileStore = create<FileState>((set) => ({
    files: [],
    setFiles: (newFiles) => set({ files: newFiles }),
}));
