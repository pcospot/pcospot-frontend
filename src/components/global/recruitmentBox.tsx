type RecruitmentBoxProps = {
    json: any;
    key: string;
    onclick?: () => void;
};

import "./recruitmentBox.css";

export default function RecruitmentBox({ json, key, onclick }: RecruitmentBoxProps) {
    const importImage = (index) => {
        return `/${index}.svg`;
    };

    const post = json;

    return (
        <div className="recruitmentBox-container" key={key} onClick={onclick}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="notificationBox-tagList">
                {post.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            <div className="notificationBox-imageList">
                {post.images && post.images.map((image: any) => (
                    <img src={importImage(image)} className="image" key={image} />
                ))}
            </div>
        </div>
    );
}
