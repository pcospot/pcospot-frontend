import middleLineIcon from "../../../assets/middleLine.svg";

type AddMiddleLineProps = {
    onClick: () => void;
};

export default function AddMiddleLine({ onClick }: AddMiddleLineProps) {
    return (
        <div onClick={onClick}>
            <img src={middleLineIcon} alt="middle line" />
        </div>
    );
}
