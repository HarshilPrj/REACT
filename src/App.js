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
      <Appbar showAlert={showAlert} />
      <AlertNew alert={alert} />
      <Routes>
        <Route path="/" element={<Form showAlert={showAlert} />} />
        <Route path="/darkmode" element={<Darkmode showAlert={showAlert} />} />
        <Route path="/login" element={<Login showAlert={showAlert} />} />
        <Route
          path="/registration"
          element={<Registration showAlert={showAlert} />}
        />
      </Routes>
    </>
  );
}

export default App;
