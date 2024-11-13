import { useEffect, useState } from "react";

type PrevImageProps = {
    src: File | null; // File 또는 null로 타입 변경
    width?: string;
    height?: string;
};

export default function PrevImage({ src, width, height }: PrevImageProps) {
    const [imageSrc, setImageSrc] = useState<string>("");

    useEffect(() => {
        if (src) {
            const reader = new FileReader();

            // 파일 읽기 완료 시 콜백 설정
            reader.onloadend = () => {
                setImageSrc(reader.result as string);
            };

            // FileReader로 파일을 읽음
            reader.readAsDataURL(src);
        } else {
            setImageSrc(""); // 파일이 없을 경우 미리보기 초기화
        }
    }, [src]);

    return (
        <div>
            {imageSrc ? (
                <img
                    src={imageSrc}
                    alt="Preview"
                    width={width}
                    height={height}
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                />
            ) : (
                <p>No image selected</p>
            )}
        </div>
    );
}
