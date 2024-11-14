import React from 'react';
import "./addImage.css";
import { useFileStore } from '../../Stores/useFileStore.tsx';
import addButton from "../../../assets/addButton.svg";

export default function AddImage() {
    const setFiles = useFileStore((state) => state.setFiles); // 여러 파일을 설정하는 함수

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files ? Array.from(e.target.files) : [];
        setFiles(files); // 선택된 파일 배열을 Zustand에 설정
    };

    return (
        <div>
            <label htmlFor="file">
                <img src={addButton} alt="Add files" />
            </label>
            <input
                type="file"
                id="file"
                onChange={handleFileChange}
                multiple // 여러 파일 선택 가능하도록 수정
            />
        </div>
    );
}
