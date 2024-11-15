import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignInPage from "./pages/signInPage.tsx";
import CalenderPage from "./pages/calenderPage.tsx";
import GlobalPage from "./pages/GlobalPage.tsx";
import DailyScrumPage from "./pages/dailyScrumPage.tsx";
import Generalpage from "./pages/generalpage.tsx";
import MainPage from "./pages/mainPage.tsx";
import NotFoundPage from "./pages/nofFoundPage.tsx";
import GoogleAuthPage from "./pages/googleAuthPage.tsx";
import NewServerPage from "./pages/newServerPage.tsx";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<GoogleAuthPage/>}/>
                <Route path="/signin" element={<SignInPage/>}/>
                <Route path="/newServer" element={<NewServerPage/>}/>
                <Route path="/" element={<MainPage />} />
                <Route path="/calender" element={<CalenderPage />} />
                <Route path="/chat" element={<Generalpage />} />
                <Route path="/scrum" element={<DailyScrumPage />} />
                <Route path="/global" element={<GlobalPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
