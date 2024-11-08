import { useEffect, useState } from "react";

type PrevImageProps = {
    src: File; // File 객체로 변경
    width?: string;
    height?: string;
};

export default function PrevImage({ src, width, height }: PrevImageProps) {
    const [imageSrc, setImageSrc] = useState<string>("");

    useEffect(() => {
        if (src) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result as string);
            };
            reader.readAsDataURL(src);
        }
    }, [src]);

    return (
        <div>
            {imageSrc && (
                <img src={imageSrc} alt="Preview" width={width} height={height} />
            )}
        </div>
    );
}
