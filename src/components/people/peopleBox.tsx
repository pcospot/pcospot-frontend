type props = {
    name: string;
    online: boolean;
    job?: string;
    img?: string;
};

import "./peopleBox.css"; // 경로 수정 ("/"에서 "./"로 변경)

export default function PeopleBox({ name, online, img }: props) {
    return (
        <div className="people-box-container">
            <div style={{ backgroundImage: `url(${img})` }} className="people-box-image">
                <div style={{ backgroundColor: online ? '#00E984' : '#919191'}} className="people-box-online"></div>
            </div>
            <p className="people-box-name" style={{color : online? 'white' : '#919191'}}>{name}</p>
        </div>
    );
}
