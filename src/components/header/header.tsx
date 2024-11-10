import react from 'react';
import Logo from "../../assets/PCOSPOT-LOGO.svg"
import hambergur from "../../assets/List.svg"
import "./header.css"
export default function Header() {
    return (
        <header>
            <button>
                <img src={hambergur} alt="hambergur"/>
            </button>
            <img src={Logo} alt="Logo"/>
        </header>
    )
}