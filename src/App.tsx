import React from 'react';
import styles from './App.module.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {HomePage, LoginPage, RegisterPage, DetailPage} from "./pages";

function App() {
    return (
        <div className={styles['App']}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}></Route>
                    <Route path={'/login'} element={<LoginPage/>}></Route>
                    <Route path={'/register'} element={<RegisterPage/>}></Route>
                    <Route path={'/detail/:touristRouteId'} element={<DetailPage/>}></Route>
                    <Route path={'*'} element={<h1>404 page not found, catch all</h1>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
