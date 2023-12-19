import React from "react";
import "../index.css"
import App from "../App";
import Login from "../component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Copyright() {
    return (
        <div variant="body2" color="textSecondary" align="center">
            {" Copyright c"}
            ysp, {new Date().getFullYear()}
            {"."}
        </div>
    );
}

function AppRouter(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </BrowserRouter>
            <div mt={5}>
                <Copyright />
            </div>
        </div>
    )
}

export default AppRouter;