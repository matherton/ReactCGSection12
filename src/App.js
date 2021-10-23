import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App Running!!");

  const togglePara = useCallback(() => {
    if (allowToggle) {
      setShowPara((prevShowPara) => !prevShowPara);
    }
  }, [allowToggle]);

  const allowToggleHandler = useCallback(() => {
    setAllowToggle((prevDisable) => !prevDisable);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={allowToggleHandler}>
        {allowToggle ? "Disable toggle" : "Allow toggle"}
      </Button>
      <Button onClick={togglePara}>Toggle</Button>
      <DemoOutput show={showPara} />
    </div>
  );
}

export default App;
