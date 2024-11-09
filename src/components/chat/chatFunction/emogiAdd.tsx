import { useState } from 'react';
import emojis from 'emoji.json';

type EmojiType = {
    char: string;
    name: string;
};

export default function EmogiAdd() {
    // 이모지 데이터를 배열로 사용
    const [emojiList, setEmojiList] = useState<string[][]>(Array(4).fill([]));

    // 이모지를 4등분하여 배열에 추가하는 함수
    const emojiPrint = () => {
        const tempList: string[][] = Array.from({ length: 4 }, () => []);
        const chunkSize = Math.floor(emojis.length / 4);

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < chunkSize; j++) {
                const emojiIndex = i * chunkSize + j;
                const emoji = (emojis as EmojiType[])[emojiIndex]?.char;
                if (emoji) {
                    tempList[i].push(emoji);
                }
            }
        }
        setEmojiList(tempList);
    };

    return (
        <div className="emogiAdd-container">
            <button onClick={emojiPrint}>이모지 추가</button>
            <div>
                {emojiList.map((group, index) => (
                    <div key={index}>
                        {group.map((emoji, idx) => (
                            <span key={idx}>{emoji} </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
