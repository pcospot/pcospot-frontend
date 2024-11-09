import { useState, ChangeEvent, useEffect } from "react";
import "./chatInput.css";
import AddImage from "./chatFunction/addImage";
import AddUnderline from "./chatFunction/addUnderline";
import AddMiddleLine from "./chatFunction/addMiddleLine";
import AddItalicFont from "./chatFunction/addItalicFont.tsx";
import Modal from "../modal/modal.tsx";
import PrevImage from "./chatFunction/prevImage.tsx";
import EmogiAdd from "./chatFunction/emogiAdd.tsx";
import { useFileStore } from "../Stores/useFileStore";
import { useMessageStore } from "../Stores/useMessageStore";
import sendImage from "../../assets/sendImage.svg";

export default function ChatInput() {
    const file = useFileStore((state) => state.file);
    const setMessage = useMessageStore((state) => state.setMessage);
    const message = useMessageStore((state) => state.message);


    const [clickedStates, setClickedStates] = useState([false, false, false, false]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 메시지 입력 핸들러
    const messageInput = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };


    // 클릭 상태 토글 함수
    const toggleClickedState = (index: number) => {
        setClickedStates((prevStates) =>
            prevStates.map((clicked, i) => (i === index ? !clicked : clicked))
        );
    };

    useEffect(() => {
        if (file) {
            setIsModalOpen(true); // 파일이 추가될 때 모달을 열기
        }
    }, [file]);

    return (
        <div className="chatInput-container">
            <Modal width="calc(95vw - 544px)" height='200px' onOpen={isModalOpen} onClose={() => setIsModalOpen(false)} className="chatInput-modal">
                <PrevImage  height="150px" src={file}/>
            </Modal>
            <div className="input-wrapper">
                <input
                    placeholder="Send a message..."
                    onChange={messageInput}
                    className="chatInput-input"
                />
                <p id="message">{message}</p>
            </div>
            <div className="chatInput-function">
                <div className="chatInput-function-lists">
                    <AddImage />
                    <AddUnderline
                        text="message"
                        clicked={clickedStates[0]}
                        onClick={() => toggleClickedState(0)}
                    />
                    <AddMiddleLine
                        text="message"
                        clicked={clickedStates[1]}
                        onClick={() => toggleClickedState(1)}
                    />
                    <AddItalicFont
                        text="message"
                        clicked={clickedStates[2]}
                        onClick={() => toggleClickedState(2)}
                    />
                    <EmogiAdd/>
                    {console.log(file)}

                </div>
                <button onClick={() => console.log(message)}>
                    <img src={sendImage} alt="Send" />
                </button>
            </div>
        </div>
    );
}