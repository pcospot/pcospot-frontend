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
import X from "../../assets/X.svg";

export default function ChatInput() {
    const files = useFileStore((state) => state.files);
    const setMessage = useMessageStore((state) => state.setMessage);

    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (files.length > 0) {
            setIsModalOpen(true);
        }
    }, [files]);

    useEffect(() => {
        const savedMessage = localStorage.getItem("savedMessage");
        if (savedMessage) {
            const rawContent = JSON.parse(savedMessage);
            const contentState = convertFromRaw(rawContent);
            setEditorState(EditorState.createWithContent(contentState));
        }
    }, []);

    const toggleInlineStyle = (style: string) => {
        const newState = RichUtils.toggleInlineStyle(editorState, style);
        setEditorState(newState);
    };

    const saveMessage = () => {
        const contentState = editorState.getCurrentContent();
        const rawContentState = convertToRaw(contentState);
        const messageToSave = JSON.stringify(rawContentState);  // Save message content

        setMessage(messageToSave); // Update the message state with the saved message
        localStorage.setItem("savedMessage", messageToSave); // Save to localStorage for persistence

        console.log("Message saved:", messageToSave); // Log the saved message
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
                <PrevImage height="150px" src={files} />
                <button onClick={() => setIsModalOpen(false)}>
                    <img src={X} alt="Close" />
                </button>
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
        </div>
    );
}
