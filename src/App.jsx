import "./App.css";
import Clock from "./4/Clock.jsx";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  setInterval(() => {
    // setShow(!show)
    setShow((prev) => !prev);
  }, 1000);

  return show && <Clock />;
}

export default App;
