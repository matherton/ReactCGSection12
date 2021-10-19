import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showPara, setShowPara] = useState(false);
  console.log("App Running!!");
  const togglePara = () => {
    setShowPara((prevShowPara) => !prevShowPara);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={togglePara}>Toggle</Button>
      <DemoOutput show={false} />
    </div>
  );
}

export default App;
