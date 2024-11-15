import Header from '../components/header/header.tsx'
import image from "../assets/testMessageImage.png"
import '../design/pages/mainPage.css'
import "../components/chat/chatList/chatList.css"
import returnLogin from "../function/returnLogin.tsx";
import {useNavigate} from "react-router-dom";

type UserType = {
    id: number
    name: string
    online: boolean
    job: string
    img : string
}

export type {UserType}

const schedule = [
    {
        id:"asdf",
        date:"2024-05-13",
        name:"aasdf"
    },{
        id:"aswdf",
        date:"2024-05-13",
        name:"aasdf"
    },
    {
        id:"asadf",
        date:"2024-05-13",
        name:"aasdf"
    }
]

const chat = [
    {
        id:"asdf",
        content:"asdfasdfasdfasdfa",
        name:"aasdf"
    },{
        id:"qwerqwer",
        content:"qwerqwerqwerqwer",
        name:"qwerr"
    },
    {
        id:"zxcvzx",
        content:"zxcvzxcvzxcv",
        name:"zxcvzcv"
    }
]



function MainPage() {
    const navigate = useNavigate();

    returnLogin()
    return (
        <>
            <Header/>
            <div className="mainPage">
                <div className="mainPage-box">
                    <h1>TO-DO</h1>
                    {schedule.map((item) => (
                        <span key={item.id} className="mainpage-schedule">
                            <h3>{item.name}</h3>
                            <p>{item.date}</p>
                        </span>
                    ))}
                    <button onClick={() => navigate("/calender")}>go</button>
                </div>
                <div className="mainPage-box">
                    <h1>Recently Chats</h1>
                    {chat.map((item) => (
                        <span key={item.id} className="mainpage-chat">
                            <h3>{item.name}</h3>
                            <p>{item.content}</p>
                        </span>
                    ))}
                    <button onClick={() => navigate("/chat")}>go</button>
                </div>
                <div className="mainPage-box">
                    <h1>Browse</h1>
                    <img src={image}/>
                    <button onClick={() => navigate("/global")}>go</button>
                </div>
            </div>
        </>
    )
}

export default MainPage
