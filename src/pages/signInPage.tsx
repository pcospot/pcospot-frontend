import favicon from "../../public/favicon.svg";
import { motion } from "framer-motion";
import "../design/pages/signInPage.css";
import returnLogin from "../function/returnLogin.tsx";
import { decodeJwt } from "jose";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // useNavigate 훅은 컴포넌트 상단에서 호출해야 합니다.

export default function SignInPage() {
    const navigate = useNavigate();

    returnLogin();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const token = localStorage.getItem("accessToken");
    if (token) {
        const decodedToken = decodeJwt(token);
        console.log(decodedToken);
    } else {
        console.log("No token found");
    }

    // Form submission handler
    const serverUpload = async () => {
        setError(null);

        const nameValue = (document.getElementById("name") as HTMLInputElement).value;
        const emailValue = (document.getElementById("email") as HTMLInputElement).value;
        const passwordValue = (document.getElementById("password") as HTMLInputElement).value;
        const selfIntroductionValue = (document.getElementById("selfIntroduction") as HTMLTextAreaElement).value;

        if (!nameValue || !emailValue || !passwordValue || !selfIntroductionValue) {
            setError("모든 칸을 채워주세요.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(emailValue)) {
            setError("맞는 형식의 이메일을 입력해주세요.");
            return;
        }

        setLoading(true);

        try {
            console.log(`${nameValue} ${emailValue} ${passwordValue} ${selfIntroductionValue}`);
        } catch (error) {
            setError("로그인 과정에서 오류가 발생하였습니다. 다시 시도해주세요");
        } finally {
            setLoading(false);
            const header = document.getElementsByClassName("header-container")[0];
            header.style.display = "flex";
            navigate("/");
        }
    };

    useEffect(() => {
        const header = document.getElementsByClassName("header-container")[0];
        header.style.display = "none";
    }, []);  // 의존성 배열을 추가하여, 처음 렌더링할 때만 실행되도록 합니다.

    return (
        <div className="signInPage-container">
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1.2,
                }}
                className="signInPage-box">
                <div className="logoNhead">
                    <img src={favicon} alt="favicon" width="72" height="72" />
                    <h1>PCOSPOT</h1>
                </div>
                <div className="signInBox">
                    <label>Name</label>
                    <input placeholder="Enter your name..." id="name" />
                </div>
                <div className="signInBox">
                    <label>Email</label>
                    <input placeholder="Enter your email..." id="email" />
                </div>
                <div className="signInBox">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password..." id="password" />
                </div>
                <div className="signInBox">
                    <label>Self Introduction</label>
                    <textarea placeholder="Enter a brief self-introduction..." id="selfIntroduction" />
                </div>
                {error && <div className="error-message">{error}</div>} {/* Display error message */}
                <div className="signInButton">
                    <button onClick={serverUpload} disabled={loading}>
                        {loading ? "Signing In..." : "Sign In"}
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
