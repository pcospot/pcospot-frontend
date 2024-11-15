import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { motion } from "framer-motion";
import "../design/pages/googleAuthPage.css";
import favicon from "../../public/favicon.svg";
import { useNavigate } from "react-router-dom";
import returnLogin from "../function/returnLogin.tsx";

export default function GoogleAuthPage() {
    returnLogin();

    const navigate = useNavigate();

    const handleSuccess = (response: any) => {
        console.log("Login Success:", response);
        const accessToken = response.access_token;
        if (accessToken) {
            localStorage.setItem("accessToken", accessToken);
            navigate('/signin');
        } else {
            console.error("No access token found in the response");
        }
    }
    const handleError = (error: any) => {
        console.error("Login Failed:", error);
    };

    // Google 로그인 훅
    const login = useGoogleLogin({
        onSuccess: handleSuccess,
        onError: handleError,
    });

    // onClick handler
    const handleLoginClick = () => {
        login();
    }

    return (
        // GoogleOAuthProvider를 최상위에 배치
        <GoogleOAuthProvider clientId="1002758901477-t40jtpnjl96vdkgonduq44ogantop9ki.apps.googleusercontent.com">
            <div className="login-container">
                <div className="login-head">
                    <motion.img
                        initial={{ x: -100, rotate: 270 }}
                        animate={{ x: 0, rotate: 360 }}
                        transition={{ ease: "easeInOut", duration: 1.2 }}
                        src={favicon}
                        alt="logo"
                    />
                    <motion.h1
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        transition={{ ease: "easeInOut", duration: 1.2 }}
                    >
                        PCOSPOT
                    </motion.h1>
                </div>
                <motion.p
                    className="motionP"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1.2 }}
                >
                    For your efficient Cooperation
                </motion.p>
                <div className="login-button-container">
                    <button onClick={handleLoginClick} className="google-login-button">
                        <span>Sign in with Google</span>
                    </button>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
}
