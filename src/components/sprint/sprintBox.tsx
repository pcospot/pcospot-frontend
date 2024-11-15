import "./sprintBox.css";
import testImage from "../../assets/List.svg";
import checkList from "../../assets/ListChecks.svg";
import Modal from "../modal/modal.tsx";
import { useEffect, useState, useRef } from "react";

export default function SprintBox() {
    const modalVariants = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut" },
        },
        exit: {
            opacity: 0,
            y: 50,
            transition: { duration: 0.3, ease: "easeIn" },
        },
    };

    const [sprintData, setSprintData] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [imageSrc, setImageSrc] = useState(checkList);  // 이미지 src를 상태로 관리

    const sprintDataFetch = async () => {
        try {
            const res = await fetch("/sprint.json");
            const data = await res.json();
            setSprintData(Object.entries(data));
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        sprintDataFetch();
    }, []);

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

    const getDateDiff = (d1: string, d2: string) => {
        const date1 = new Date(d1);
        const date2 = new Date(d2);
        const diffDate = date1.getTime() - date2.getTime();
        return Math.abs(diffDate / (1000 * 60 * 60 * 24));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < sprintData.length - 1 ? prev + 1 : prev));
    };

    // refs 추가
    const wrapperRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const openModal = (index: number) => {
        setIsModalOpen(true);
        setOpenIndex(index);
        if (wrapperRef.current) {
            (wrapperRef.current as HTMLElement).style.height = '500px';
        }
        if (containerRef.current) {
            (containerRef.current as HTMLElement).style.height = "100%";
        }
        if (listRef.current) {
            (listRef.current as HTMLElement).style.height = "100%";
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setOpenIndex(null);
        if (wrapperRef.current) {
            (wrapperRef.current as HTMLElement).style.height = '100%';
        }
        if (containerRef.current) {
            (containerRef.current as HTMLElement).style.height = "100%";
        }
        if (listRef.current) {
            (listRef.current as HTMLElement).style.height = "100%";
        }
    };

    // mouseover 시 이미지 변경 처리 함수
    const mouseInImage = () => {
        setImageSrc(testImage);  // 원하는 이미지로 변경
        console.log("mouseover triggered");
    };

    const mouseOutImage = () => {
        setImageSrc(checkList);  // 원하는 이미지로 변경
    };

    return (
        <div ref={wrapperRef} className="sprintBox-wrapper">
            <div className="sprintBox-buttons">
                <button className="sprintBox-beforeButton" onClick={handlePrev} disabled={currentIndex === 0}>
                    &lt;
                </button>
                <button className="sprintBox-afterButton" onClick={handleNext} disabled={currentIndex === sprintData.length - 1}>
                    &gt;
                </button>
            </div>
            <div ref={containerRef} className="sprintBox-container">
                <div className="sprintBox-contents" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {sprintData.map((item, index) => (
                        <div key={index} className="sprintBox-content">
                            <h2>{item[1].name}</h2>
                            <div className="sprintBox-content-days">
                                <span>
                                    <p>남은 일수: {getDateDiff(formattedDate, item[1].time)}</p>
                                    <div className="sprintBox-progress">
                                        <div id="sprintBox-progress-bar"></div>
                                    </div>
                                </span>
                                <span
                                    onMouseOver={mouseInImage}
                                    onMouseOut={mouseOutImage}
                                    onClick={() => openModal(index)}// React 방식으로 mouseover 이벤트 설정
                                >
                                    <img id="listImage" src={imageSrc} alt="check list" />
                                    <p>Completed 2 of {Object.values(item[1].list).length}</p>
                                </span>
                            </div>
                            {isModalOpen && openIndex === index && (
                                <Modal
                                    width="100%"
                                    height="300px"
                                    onOpen={isModalOpen}
                                    onClose={closeModal}
                                    className="sprintBox-modal-container"
                                    variants={modalVariants}
                                >
                                    <div className="sprintBox-modal-contents">
                                        {Object.values(item[1].list).map((item :any) => (
                                            <span>
                                            {item}
                                        </span>
                                        ))}
                                    </div>
                                </Modal>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
