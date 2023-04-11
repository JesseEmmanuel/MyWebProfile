import React from "react";
// import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      {/* <Intro /> */}
      <Skills />
      <Works />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
