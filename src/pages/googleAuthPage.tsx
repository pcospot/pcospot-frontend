import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode";
import { motion } from "framer-motion";
import "../design/pages/googleAuthPage.css"
import favicon from "../../public/favicon.svg"
import {useNavigate} from "react-router-dom";
import returnLogin from "../function/returnLogin.tsx";

export default function GoogleAuthPage() {

    returnLogin()

    const clientId = "1002758901477-t40jtpnjl96vdkgonduq44ogantop9ki.apps.googleusercontent.com"; // Google Cloud에서 발급받은 clientId 입력
    const navigate = useNavigate();
    const handleSuccess = (response: any) => {
        console.log("Login Success:", response);
        localStorage.setItem("accessToken", response.credential);
        console.log(response.credential);
        navigate('/signin')
    };

    const handleFailure = (error: any) => {
        console.error("Login Failed:", error);
    };

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className="login-container">
                <div className="login-head">
                    <motion.img
                        initial={{ // 처음 마운트 될 때 상태,
                            // 마운트시 애니메이션을 원하지 않다면 initial = {false}
                            x: -100,
                            rotate: 270,
                        }}
                        animate={{ // 애니메이션이 끝났을 때의 상태
                            x: 0,
                            rotate: 360,
                        }}
                        transition={{ // animate state까지 어떻게 변할지 정하는 옵션
                            // 여러 transition type을 정의 할 수 있다.
                            ease: "easeOut",
                            duration: 1.2,
                        }}
                        src={favicon} alt="logo"/>
                    <motion.h1
                        initial={{
                            x: -100
                        }}
                        animate={{
                            x: 0
                        }}
                        transition={{
                            ease: "easeOut",
                            duration: 1.2,
                        }}
                    >PCOSPOT
                    </motion.h1>
                </div>
                <motion.p className="motionP"
                          initial={{ opacity: 0 }}  // 처음에는 투명
                          animate={{ opacity: 1 }}   // 애니메이션 후에 불투명
                          transition={{ delay: 1.5,duration:1.2 }}  // 2초 후에 애니메이션 시작
                >당신을 위한 간편한 협업툴</motion.p>
                <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={handleFailure}
                    useOneTap
                />
            </div>
        </GoogleOAuthProvider>
    );
}
