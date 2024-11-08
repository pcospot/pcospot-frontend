import React, { useEffect } from "react";

type ModalProps = {
    width?: string;
    height?: number;
    onClose?: () => void;
    onOpen?: boolean;
    children?: React.ReactNode;
    className?: string;
};

import "./modal.css";

export default function Modal({ width, height, onOpen, onClose, children, className }: ModalProps) {
    const modalStyle = {
        width: `${width}`,
        height: `${height}px`,
    };

    useEffect(() => {
        // onOpen이 true일 때만 클래스를 추가
        if (onOpen && className) {
            const element = document.getElementsByClassName("modal-container")[0];
            if (element) {
                element.classList.add(className);
            }
        }
    }, [onOpen, className]);  // onOpen 또는 className이 변경될 때마다 실행

    // `onOpen`이 `true`일 때만 모달을 렌더링
    return onOpen ? (
        <div style={modalStyle} className="modal-container">
            {children}
            <p onClick={onClose} style={{color:"white"}}>Close</p>
        </div>
    ) : null;
}
