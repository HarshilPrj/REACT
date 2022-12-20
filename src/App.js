import React, { useState } from "react";
import Appbar from "./Components/Appbar";
import Darkmode from "./Components/Darkmode";
import Form from "./Components/Form";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import AlertNew from "./Components/Alert";

function App() {
    const [alert, setAlert] = useState(null);
    const [mode, setMode] = useState("light");

    const mode2 = () => {
        mode === "light" ? setMode("dark") : setMode("light");
    };

    const showAlert = (msg, type) => {
        setAlert({
            msg: msg,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    return (
        <>
            <Appbar showAlert={showAlert} mode2={mode2} />
            <AlertNew alert={alert} />
            <Routes>
                <Route
                    path="/"
                    element={<Form showAlert={showAlert} mode={mode} />}
                />
                <Route
                    path="/darkmode"
                    element={<Darkmode showAlert={showAlert} mode={mode} />}
                />
                <Route
                    path="/login"
                    element={<Login showAlert={showAlert} />}
                />
                <Route
                    path="/registration"
                    element={<Registration showAlert={showAlert} />}
                />
            </Routes>
        </>
    );
}

export default App;
