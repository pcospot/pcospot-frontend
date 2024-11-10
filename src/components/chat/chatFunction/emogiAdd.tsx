import { useState } from 'react';
import emojis from 'emoji.json';
import useEmojiStore from "../../Stores/useEmojiStore.tsx";

type EmojiType = {
    id: string;
};

import "./emogiAdd.css";
import Modal from "../../modal/modal.tsx";

export default function EmogiAdd({ id }: EmojiType) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false);
    const [emojiList, setEmojiList] = useState<{ id: string; char: string }[]>([]);
    const addEmojiToStore = useEmojiStore(state => state.addEmoji);

    const emojiPrint = () => {
        setEmojiList(emojis);
        setIsModalOpen(true);
    };

    return (
        <div className="emogiAdd-container">
            <button onClick={emojiPrint} style={{ color: 'white' }}> + </button>
            {isModalOpen && (
                <Modal width="40vw" height="200px" onOpen={isModalOpen} onClose={closeModal} className="emogiAdd-modal">
                    <div className="emojiAdd-content">
                        {emojiList.map((emoji) => (
                            <p key={emoji.id} onClick={() => addEmojiToStore(id, emoji.char)}>
                                {emoji.char}
                            </p>
                        ))}
                    </div>
                </Modal>
            )}
        </div>
    );
}
