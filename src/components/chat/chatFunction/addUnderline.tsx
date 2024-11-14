import underlineIcon from "../../../assets/underlineIcon.svg";

type AddUnderlineProps = {
    onClick: () => void;
};

export default function AddUnderline({ onClick }: AddUnderlineProps) {
    return (
        <div onClick={onClick}>
            <img src={underlineIcon} alt="underline" />
        </div>
    );
}
