import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
  const [showPara, setShowPara] = useState(false);
  const togglePara = () => {
    setShowPara((prevShowPara) => !prevShowPara);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={togglePara}>Toggle</Button>
      {showPara && <p>This is new!</p>}
    </div>
  );
}

export default App;
