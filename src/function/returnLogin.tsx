import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function returnLogin() {
    const token = localStorage.getItem("accessToken");
    const navigate = useNavigate()
    if (!token) {
        return useEffect(() => {
            navigate("/auth");
        })
    }
}