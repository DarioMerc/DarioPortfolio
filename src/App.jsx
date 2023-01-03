import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="min-h-screen  max-w-5xl w-11/12 mx-auto font-muli">
        <Intro />
        <Experience />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

export default App;
