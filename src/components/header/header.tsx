import react from 'react';
import hambergur from "../../assets/hambergur.png"
import "./header.css"
export default function Header() {
    return (
        <header>
            <button>
                <img src={hambergur} alt="hambergur"/>
            </button>
            <h1>pcospot</h1>
        </header>
    )
}