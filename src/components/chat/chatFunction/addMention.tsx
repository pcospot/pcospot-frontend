import mentionIcon from "../../../assets/mentionIcon.svg"
import {useEffect} from "react";

type AddMentionProps = {
    text?: string,
    clicked: boolean;
    onClick: () => void;
}

export default function AddMention({text = "", clicked, onClick}: AddMentionProps) {
    useEffect(() => {
        const element = document.getElementsByClassName(text);
        if (element) {
            element.innerText = clicked ? "@" : "";
        }
        },[text, clicked])
    return (
        <div onClick={onClick}>
            <img src={mentionIcon} alt="mention" />
        </div>
    )
}