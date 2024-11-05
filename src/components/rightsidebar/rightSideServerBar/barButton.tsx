type barButtonProps = {
    src: string;
    choose: boolean;
    background: boolean;
    alarm?: number;
    arcaived?: boolean;
};

import arcived from "../../../assets/FloppyDiskBack.svg";
import "../rightSideServerBar/barButton.css";

export default function BarButton({ src, choose, background, alarm, arcaived }: barButtonProps) {
    const alarmLengthClass = () => {
        if (alarm === undefined) return '';
        if (alarm < 10) return 'alarmOne';
        if (alarm < 100) return 'alarmTen';
        return 'alarmHun';
    };

    const buttonStyle = {
        width: '36px',
        height: '36px',
        border: choose ? '2px solid #00E984' : '1px solid #282828',
        ...(background && { backgroundImage: `url(${src})`, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' })
    };

    if (!arcaived) {
        return (
            <button style={buttonStyle}>
                {background && alarm !== undefined && (
                    <div className={alarmLengthClass()}>
                        <p>{alarm >= 100 ? '99+' : alarm}</p>
                    </div>
                )}
                {!background && <img src={src} alt={src} />}
            </button>
        );
    } else {
        return (
            <button style={buttonStyle} className="arcaived-background">
                <div className='arcaived-disk'>
                    <img src={arcived} alt='arcived' />
                </div>
                <div className="overlay"></div>
            </button>
        );
    }
}
