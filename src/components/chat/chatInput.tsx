import { useState, ChangeEvent } from "react";
import "./chatInput.css";
import AddImage from "./chatFunction/addImage";
import AddUnderline from "./chatFunction/addUnderline";
import AddMiddleLine from "./chatFunction/addMiddleLine";
import AddItalicFont from "./chatFunction/addItalicFont.tsx";
import AddMention from "./chatFunction/addMention.tsx";
import { useFileStore } from "./chatFunction/Stores/useFileStore";
import { useMessageStore } from "./chatFunction/Stores/useMessageStore";
import sendImage from "../../assets/sendImage.svg";
import memoImage from "../../assets/memo.svg"
import translateImage from "../../assets/translate.svg"

export default function ChatInput() {
    const file = useFileStore((state) => state.file);
    const setMessage = useMessageStore((state) => state.setMessage);
    const message = useMessageStore((state) => state.message);

    const [clickedStates, setClickedStates] = useState([false, false, false, false]);
    // 첫 번째는 AddUnderline, 두 번째는 AddMiddleLine, 세 번째는 AddItalicFont, 네 번째는 AddMention

    const messageInput = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const toggleClickedState = (index: number) => {
        setClickedStates((prevStates) =>
            prevStates.map((clicked, i) => (i === index ? !clicked : clicked))
        );
    };

    return (
        <div className="chatInput-container">
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
                        onClick={() => toggleClickedState(0)} // 첫 번째 인덱스를 토글
                    />
                    <AddMiddleLine
                        text="message"
                        clicked={clickedStates[1]}
                        onClick={() => toggleClickedState(1)} // 두 번째 인덱스를 토글
                    />
                    <AddItalicFont
                        text="message"
                        clicked={clickedStates[2]}
                        onClick={() => toggleClickedState(2)}
                    />
                    <AddMention
                        text="chatInput-input"
                        clicked={clickedStates[3]}
                        onClick={() => toggleClickedState(3)}
                    />
                    <div>
                        <img src={memoImage} alt="memo"/>
                    </div>
                    <div>
                        <img src={translateImage} alt="translate"/>
                    </div>
                    {console.log(file)}
                </div>
                <button onClick={() => console.log(message)}>
                    <img src={sendImage} alt="Send" />
                </button>
            </div>
        </div>
    );
}
