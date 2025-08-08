import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Addproduct from "../pages/Addproduct";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/Addproduct" element={<Addproduct />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default Router;
