import "../../../design/rightSidePeopleBar.css";
import profileImage from "../../../assets/profile image.svg";
import PeopleBox from "../../people/peopleBox.tsx";
// import {UserType} from "../../../pages/mainPage.tsx"
//
// type RightSidePeopleBarProps = {
//     user : UserType;
// }

export default function RightSidePeopleBar() {
    // const company = {
    //     name: 'Binford Ltd.',
    //     days: '27',
    //     progress: '70'
    // };

    const people = [
        {
            name: '한석규',
            online: true,
            job: 'Developer',
            img: profileImage
        },
        {
            name: '이주안',
            online: false,
            job: 'Developer',
            img: profileImage
        },
        {
            name: '김해린',
            online: true,
            job: 'Designer',
            img: profileImage
        },
        {
            name: '제리얌',
            online: false,
            job: 'Developer',
            img: profileImage
        }
    ];


    const divideJob = (item : any) => {
        return <PeopleBox key={item.name} name={item.name} online={item.online} img={item.img} job={item.job} />;
    };

    return (
        <div className="right-side-people-bar">
            <div className="right-side-people-bar-job-dev">
                <div className="job-developer">
                    <div></div>
                    <p>Developer</p>
                </div>
                {people.filter(item => item.job === 'Developer').map(divideJob)}
            </div>
            <div className="right-side-people-bar-job-designer">
                <div className="job-designer">
                    <div></div>
                    <p>Designer</p>
                </div>
                {people.filter(item => item.job === 'Designer').map(divideJob)}
            </div>
        </div>
    );
}
