import React, { FC } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const App: FC = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
