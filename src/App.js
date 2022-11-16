import React from "react";
import Appbar from "./Components/Appbar";
import Darkmode from "./Components/Darkmode";
import Form from "./Components/Form";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Appbar />
      <Routes>
        <Route path="/darkmode" element={<Darkmode />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
