import { useState } from "react";
import "../design/pages/newServerPage.css";
import { useNavigate } from "react-router-dom";

interface Role {
    role: string;
    color: string;
}

export default function NewServerPage() {
    const [roleInput, setRoleInput] = useState<string>("");
    const [colorInput, setColorInput] = useState<string>("#000000");
    const [roles, setRoles] = useState<Role[]>([]);
    const navigate = useNavigate();

    // 역할과 색깔 입력 처리
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && roleInput) {
            setRoles([
                ...roles,
                { role: roleInput, color: colorInput },
            ]);
            setRoleInput("");  // 입력란 초기화
            setColorInput("#000000");  // 색깔 초기화
        }
    };

    // 색상 코드 텍스트 입력과 color input 동기화
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = e.target.value;
        setColorInput(newColor);
    };

    const handleTextColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = e.target.value;
        setColorInput(newColor);
    };

    const handleDeleteRole = (index: number) => {
        setRoles(roles.filter((_, i) => i !== index));
    };

    return (
        <div className="newServerPage-container">
            <div className="newServerPage-box">
                <div className="name">
                    <h1>Server name</h1>
                    <input />
                </div>
                <div>
                    <h1>Deadline</h1>
                    <input type="date" />
                </div>
                <div className="rolesNcolor">
                    <h1>Roles and Color</h1>
                    <div className="roleschoose">
                        <input
                            type="text"
                            value={roleInput}
                            onChange={(e) => setRoleInput(e.target.value)}
                            onKeyDown={handleKeyPress} // 엔터키 이벤트 처리
                            placeholder="Enter role"
                            className="roleInput"
                        />
                        <div>
                            <input
                                type="text"
                                value={colorInput}
                                onChange={handleTextColorChange} // 텍스트 입력 색상 변경
                                placeholder="#000000"
                            />
                            <input
                                type="color"
                                value={colorInput}
                                onChange={handleColorChange} // 색상 입력 필드에서 색상 변경
                            />
                        </div>
                    </div>
                    <div className="rolescontents">
                        {roles.map((role, index) => (
                            <div className="rolescontent">
                                <span key={index} >{role.role}</span>
                                <span
                                    style={{
                                        display: "inline-block",
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        backgroundColor: role.color,
                                    }}
                                />
                                <button onClick={() => handleDeleteRole(index)}>X</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={() => navigate("/")}>Cancel</button>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}
