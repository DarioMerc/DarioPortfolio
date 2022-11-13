import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="max-w-5xl w-11/12 mx-auto font-muli">
        <Intro />
        <Experience />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

export default App;
