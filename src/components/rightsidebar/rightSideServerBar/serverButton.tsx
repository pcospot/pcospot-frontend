type ServerButtonProps = {
    choose?: boolean;
    background: string;
    alarm?: number;
    arcaived?: boolean;
    onClick?: () => void;
};

import arcived from "../../../assets/FloppyDiskBack.svg";
import "../rightSideServerBar/barButton.css";

export default function ServerButton({ choose, background, alarm, arcaived, onClick }: ServerButtonProps) {
    const alarmLengthClass = () => {
        if (alarm === undefined) return '';
        if (alarm < 10) return 'alarmOne';
        if (alarm < 100) return 'alarmTen';
        return 'alarmHun';
    };

    const buttonStyle = {
        width: '36px',
        height: '36px',
        outline: choose ? '2px solid #00E984' : '1px solid #282828',
        ...(background && { backgroundImage: `url(${background})`, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' })
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {!arcaived && alarm !== undefined && (
                <div className={alarmLengthClass()} style={{zIndex:"10000"}}>
                    <p >{alarm >= 100 ? '99+' : alarm}</p>
                </div>
            )}
            {arcaived && (
                <div className="arcaived-disk">
                    <img src={arcived} alt='archived' />
                    <div className="overlay"></div>
                </div>
            )}
        </button>
    );
}
