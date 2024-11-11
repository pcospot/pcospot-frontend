import Logo from "../../assets/PCOSPOT-LOGO.svg"
import hambergur from "../../assets/List.svg"
import "./header.css"
export default function Header() {
    return (
        <header className="header-container">
            <button>
                <img src={hambergur} alt="hambergur"/>
            </button>
            <img src={Logo} alt="Logo"/>
        </header>
    )
}