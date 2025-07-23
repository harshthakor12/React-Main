import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarScrollExample from "./component/navbar"; // or rename to Navbar1 if you prefer
import Hero from "./component/hero";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <NavbarScrollExample />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
