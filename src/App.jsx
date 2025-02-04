import React from "react";
import Navbar from "./Components/Navbar/Navbar"; 
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyWork from "./Components/MyWork/MyWork";
import Connect from "./Components/Connect/Connect";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;