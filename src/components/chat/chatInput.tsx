import { useState, useEffect } from "react";
import { Editor, EditorState, RichUtils, convertToRaw, convertFromRaw } from "draft-js";
import "./chatInput.css";
import AddImage from "./chatFunction/addImage";
import AddUnderline from "./chatFunction/addUnderline";
import AddMiddleLine from "./chatFunction/addMiddleLine";
import AddItalicFont from "./chatFunction/addItalicFont";
import Modal from "../modal/modal";
import PrevImage from "./chatFunction/prevImage";
import { useFileStore } from "../Stores/useFileStore";
import { useMessageStore } from "../Stores/useMessageStore";
import sendImage from "../../assets/sendImage.svg";

export default function ChatInput() {
    const file = useFileStore((state) => state.file);
    const setMessage = useMessageStore((state) => state.setMessage);
    const message = useMessageStore((state) => state.message);

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (file) {
            setIsModalOpen(true);
        }
    }, [file]);

    useEffect(() => {
        // 저장된 메시지가 있으면 불러오기
        const savedMessage = localStorage.getItem("savedMessage");
        if (savedMessage) {
            const rawContent = JSON.parse(savedMessage);
            const contentState = convertFromRaw(rawContent);
            setEditorState(EditorState.createWithContent(contentState));
        }
    }, []);

    // 메시지 입력 핸들러
    const messageInput = (e: any) => {
        setMessage(e.target.value);
    };

    // 스타일 적용 토글 함수
    const toggleInlineStyle = (style: string) => {
        const newState = RichUtils.toggleInlineStyle(editorState, style);
        setEditorState(newState);
    };

    // 메시지 저장 함수
    const saveMessage = () => {
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState); // ContentState를 JSON으로 변환
        setMessage(JSON.stringify(rawContentState)); // Zustand 상태에 저장
        localStorage.setItem("savedMessage", JSON.stringify(rawContentState)); // 로컬스토리지에 저장
        console.log("Message saved:", rawContentState); // 로그로 출력
    };

    // 저장된 메시지를 표시하는 함수
    const renderSavedMessage = () => {
        if (message) {
            const rawContent = JSON.parse(message);
            const contentState = convertFromRaw(rawContent);
            const savedEditorState = EditorState.createWithContent(contentState);
            return <Editor editorState={savedEditorState} readOnly={true} customStyleMap={{
                UNDERLINE: { textDecoration: "underline" },
                STRIKETHROUGH: { textDecoration: "line-through" },
                ITALIC: { fontStyle: "italic" },
            }} />;
        }
        return null;
    };

    return (
        <div className="chatInput-container">
            <Modal
                width="calc(95vw - 544px)"
                height="200px"
                onOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                className="chatInput-modal"
            >
                <PrevImage height="150px" src={file} />
            </Modal>

            <div className="input-wrapper">
                <Editor
                    editorState={editorState}
                    onChange={setEditorState}
                    customStyleMap={{
                        UNDERLINE: { textDecoration: "underline" },
                        STRIKETHROUGH: { textDecoration: "line-through" },
                        ITALIC: { fontStyle: "italic" },
                    }}
                    editorClassName="chatInput-input"
                />
            </div>

            <div className="chatInput-function">
                <div className="chatInput-function-lists">
                    <AddImage />
                    <AddUnderline onClick={() => toggleInlineStyle("UNDERLINE")} />
                    <AddMiddleLine onClick={() => toggleInlineStyle("STRIKETHROUGH")} />
                    <AddItalicFont onClick={() => toggleInlineStyle("ITALIC")} />
                </div>
                <button onClick={saveMessage}>
                    <img src={sendImage} alt="Send" />
                </button>
            </div>

            {/*<div className="savedMessage">*/}
            {/*    /!* 저장된 메시지 표시 *!/*/}
            {/*    {renderSavedMessage()}*/}
            {/*</div>*/}
        </div>
    );
}
