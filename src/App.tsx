import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header.tsx";
import "./App.css";

import CalenderPage from "./pages/calenderPage.tsx";
import GlobalPage from "./pages/GlobalPage.tsx";
import DailyScrumPage from "./pages/dailyScrumPage.tsx";
import FeedbackPage from "./pages/feedbackPage.tsx";
import Generalpage from "./pages/generalpage.tsx";
import MainPage from "./pages/mainPage.tsx";
import NoticePage from "./pages/noticePage.tsx";
import ProjectPage from "./pages/projectPage.tsx";
import SchedulePage from "./pages/schedulePage.tsx";
import NotFoundPage from "./pages/nofFoundPage.tsx";
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/calender" element={<CalenderPage />} />
                <Route path="/general" element={<Generalpage />} />
                <Route path="/scrum" element={<DailyScrumPage />} />
                <Route path="/global" element={<GlobalPage />} />
                <Route path="/feedback" element={<FeedbackPage />} />
                <Route path="/notice" element={<NoticePage />} />
                <Route path="/project" element={<ProjectPage />} />
                <Route path="/schedule" element={<SchedulePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
