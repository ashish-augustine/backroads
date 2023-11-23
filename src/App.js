import React from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
 
function App() {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
      {/* For Hero, About, Services, Tours & Footer the order matters, because nothing told specifically in CSS!!! */}

      <Navbar />
      {/*Navbar component declaration has <nav className="navbar1"> and it is defined in index.css Line 454 to align TOP */}
    </React.Fragment>
  );
}

export default App;
