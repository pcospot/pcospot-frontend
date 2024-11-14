import { useEffect, useState } from "react";
import "./prevImage.css"

type PrevImageProps = {
    src: File[]; // File 배열 타입으로 변경
    width?: string;
    height?: string;
};

export default function PrevImage({ src, width, height }: PrevImageProps) {
    const [imageSrcs, setImageSrcs] = useState<string[]>([]);

    useEffect(() => {
        if (src.length > 0) {
            const newImageSrcs: string[] = [];
            src.forEach((file) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    newImageSrcs.push(reader.result as string);
                    // 모든 파일을 읽은 후에 상태를 업데이트
                    if (newImageSrcs.length === src.length) {
                        setImageSrcs(newImageSrcs);
                    }
                };
                reader.readAsDataURL(file);
            });
        } else {
            setImageSrcs([]); // 파일이 없을 경우 미리보기 초기화
        }
    }, [src]);

    return (
        <div className="image-container">
            {imageSrcs.length > 0 ? (
                imageSrcs.map((imageSrc, index) => (
                    <img
                        key={index}
                        src={imageSrc}
                        alt={`Preview ${index}`}
                        width={width}
                        height={height}
                        style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                ))
            ) : (
                <p>No images selected</p>
            )}
        </div>
    );
}
