/* eslint-disable no-unused-vars */
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import React from "react";
import SplashPage from "./pages/SplashPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddNewPage from "./pages/addNewPage";

const App = () => (
  <Routes>
    <Route path="/" element={<SplashPage />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/home" element={<Home />}></Route>
    <Route path="*" element={<ErrorPage />}></Route>
    <Route path="/preorderPage/addNewPage" element={<AddNewPage />}></Route>
  </Routes>
);

export default App;
