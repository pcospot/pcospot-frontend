import italicFontIcon from  "../../../assets/italicFont.svg"
import {useEffect} from "react";

type AddItalicFontProps = {
    text?: string;
    clicked: boolean;
    onClick: () => void;
};

export default function AddItalicFont({ text = "", clicked, onClick }: AddItalicFontProps) {
    useEffect(() => {
        const element = document.getElementById(text);
        if (element) {
            element.style.fontStyle = clicked ? "italic" : "";
        }
    }, [clicked, text]); // clicked와 text가 변경될 때마다 실행

    return (
        <div onClick={onClick} style={{ color: clicked ? "blue" : "black" }}>
            <img src={italicFontIcon} alt="underline" />
        </div>
    );
}
