import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import { BackgroundColorChanger } from './Pages/BackgroundColorChanger'
// import { Calculator } from './Pages/Calculator'
import { Index } from './Pages/Index'

export const AppRoutes = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Index</Link></li>
                <li><Link to="/bgcolor/red">Background Color Changer</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<Index></Index>}></Route>
                <Route path="/bgcolor/:colorname" element={<BackgroundColorChanger></BackgroundColorChanger>}></Route>
            </Routes>
        </div>
    )
}
