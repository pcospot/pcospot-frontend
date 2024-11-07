import { useEffect } from "react";
import underlineIcon from "../../../assets/underlineIcon.svg";

type AddUnderlineProps = {
    text?: string;
    clicked: boolean;
    onClick: () => void;
};

export default function AddUnderline({ text = "", clicked, onClick }: AddUnderlineProps) {
    useEffect(() => {
        const element = document.getElementById(text);
        if (element) {
            element.style.textDecoration = clicked ? "underline" : "";
        }
    }, [clicked, text]); // clicked와 text가 변경될 때마다 실행

    return (
        <div onClick={onClick} style={{ color: clicked ? "blue" : "black" }}>
            <img src={underlineIcon} alt="underline" />
        </div>
    );
}
