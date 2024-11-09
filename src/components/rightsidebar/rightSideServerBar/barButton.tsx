import React from "react";

type BarButtonProps = {
    src: string;
    choose?: boolean;
    background: boolean;
    onClick?: () => void;
    children?: React.ReactNode; // children을 prop으로 받기 위한 타입 정의
};

import "../rightSideServerBar/barButton.css";

export default function BarButton({ src, choose, background, onClick, children  }: BarButtonProps) {
    const buttonStyle = {
        width: '36px',
        height: '36px',
        outline: choose ? '2px solid #00E984' : '1px solid #282828',
        backgroundColor: choose ? 'rgba(0,233,132,0.15)' : '#282828',
        ...(background && { backgroundImage: `url(${src})`, display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' })
    };

    return (
        <button style={buttonStyle} onClick={onClick}>
            {!background && <img src={src} alt={src} />}
            {children}
        </button>
    );
}
