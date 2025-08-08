import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default Home;
