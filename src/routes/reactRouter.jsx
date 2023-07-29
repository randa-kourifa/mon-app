// src/router.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import MyNavbar from "../components/NavBar/NavBar";
import Home from "../pages/Home";
import About from "../pages/about";
import Admin from "../pages/admin";
import Login from "../pages/login";
import Signin from "../pages/signin";

const AppRouter = () => {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
