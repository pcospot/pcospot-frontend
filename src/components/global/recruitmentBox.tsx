
type RecruitmentBoxProps = {
    json : any
    key : string
}

import "./recruitmentBox.css"

export default function RecruitmentBox({json, key}: RecruitmentBoxProps) {

    const importImage = (index) => {
        console.log(index)
        return `/${index}.svg`
    }

    const post = json

    return (
        <div className="recruitmentBox-container" key={key}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="notificationBox-tagList">
                {post.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            <div className="notificationBox-imageList">
                {post.images && post.images.map((image : any) => (
                    <img src={importImage(image)} className="image"></img>
                ))}
            </div>
        </div>
    )
}