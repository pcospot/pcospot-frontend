import React from 'react';
import "./addImage.css";
import { useFileStore } from './useFileStore';

export default function AddImage() {
    const setFile = useFileStore((state) => state.setFile);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFile(file);
    };

    return (
        <>
            <input type="file" onChange={handleFileChange} />
        </>
    );
}
