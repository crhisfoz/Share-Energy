import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { ErrorPage } from "../pages/error/ErrorPage";
import { Home } from "../pages/home/Home"
import { Login } from "../pages/login/Login";
import { Signup } from "../pages/signup/Signup";
import { CatsPage } from "../pages/cats/CatsPage";
import { DogsPage } from "../pages/dogs/DogsPage";
import { UsersPage } from "../pages/users/Users";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="" element={<App />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="cats" element={<CatsPage />} />
        <Route path='dogs' element={<DogsPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/users"  element={<UsersPage/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )

}