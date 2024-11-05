import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header.tsx'
import './App.css'
import MainPage from "./pages/mainPage.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import DailyScrumPage from "./pages/dailyScrumPage.tsx";

function App() {

  return (
    <>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/scrum" element={<DailyScrumPage/>}/>
            </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
