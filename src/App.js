import React from "react";
import Appbar from "./Components/Appbar";
import Darkmode from "./Components/Darkmode";
import Form from "./Components/Form";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Registration from "./Components/Registration";

function App() {
  return (
    <>
      <Appbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/darkmode" element={<Darkmode />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
