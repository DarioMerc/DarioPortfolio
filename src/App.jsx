import { useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="min-h-screen  max-w-5xl w-11/12 mx-auto font-muli">
        <Intro />
        <Portfolio />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}

export default App;
