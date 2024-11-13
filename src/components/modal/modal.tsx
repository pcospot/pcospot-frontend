import React, { useEffect } from "react";
import { motion } from "framer-motion";  // framer-motion 추가

type ModalProps = {
    width?: string;
    height?: string;
    onClose?: () => void;
    onOpen?: boolean;
    children?: React.ReactNode;
    className?: string;
    variants ?: any
};

import "./modal.css";

export default function Modal({ width, height, onOpen, onClose, children, className,variants }: ModalProps) {
    const modalStyle = {
        width: `${width}`,
        height: `${height}`,
    };

    const inputVariants = variants

    useEffect(() => {
        // onOpen이 true일 때만 클래스를 추가
        if (onOpen && className) {
            const element = document.getElementsByClassName("modal-container")[0];
            if (element) {
                element.classList.add(className);
            }
        }
    }, [onOpen, className]);

    // 모달 애니메이션 설정


    // `onOpen`이 `true`일 때만 모달을 렌더링
    return onOpen ? (
        <motion.div
            style={modalStyle}
            className="modal-container"
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {children}
        </motion.div>
    ) : null;
}
