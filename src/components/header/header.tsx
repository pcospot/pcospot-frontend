import Logo from "../../assets/PCOSPOT-LOGO.svg";
import hambergur from "../../assets/List.svg";
import "./header.css";

// Header 컴포넌트에 onToggleSidebar prop 추가
type HeaderProps = {
    onToggleSidebar?: () => void;
};

export default function Header({ onToggleSidebar }: HeaderProps) {
    return (
        <header className="header-container">
            <button onClick={onToggleSidebar}>
                <img src={hambergur} alt="hambergur" />
            </button>
            <img src={Logo} alt="Logo" />
        </header>
    );
}
