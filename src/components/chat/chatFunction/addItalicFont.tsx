import italicIcon from "../../../assets/italicFont.svg";

type AddItalicFontProps = {
    onClick: () => void;
};

export default function AddItalicFont({ onClick }: AddItalicFontProps) {
    return (
        <div onClick={onClick}>
            <img src={italicIcon} alt="italic" />
        </div>
    );
}
