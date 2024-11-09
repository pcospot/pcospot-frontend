import React from 'react';
import "./addImage.css";
import { useFileStore } from '../../Stores/useFileStore.tsx';
import addButton from "../../../assets/addButton.svg"

export default function AddImage() {
    const setFile = useFileStore((state) => state.setFile);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFile(file);
    };

    return (
        <div>
            <label htmlFor="file" >
                <img src={addButton}/>
            </label>
            <input type="file" id="file" onChange={handleFileChange}/>
        </div>
    );
}
