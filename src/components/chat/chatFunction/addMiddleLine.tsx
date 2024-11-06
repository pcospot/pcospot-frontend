
import middleLineIcon from "../../../assets/middleLine.svg"
import {useEffect} from "react";
import underlineIcon from "../../../assets/underlineIcon.svg";

type AddMiddleLineProps = {
    text?: string;
    clicked: boolean;
    onClick: () => void;
};

export default function AddMiddleLine({ text = "", clicked, onClick }: AddMiddleLineProps) {
    useEffect(() => {
        const element = document.getElementById(text);
        if (element) {
            element.style.textDecoration = clicked ? "line-through" : "";
        }
    }, [clicked, text]); // clicked와 text가 변경될 때마다 실행

    return (
        <div onClick={onClick} style={{ color: clicked ? "blue" : "black" }}>
            <img src={middleLineIcon} alt="underline" />
        </div>
    );
}