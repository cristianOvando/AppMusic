// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import LandingPage from '../pages/landingPage';
import MusicApp from "../pages/MusicApp";

function App() {

  return (
    <BrowserRouter>
        <Routes>
              <Route>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/musicapp" element={<MusicApp/>}/>
              </Route>
        </Routes>

    </BrowserRouter>
  )
}

export default App
