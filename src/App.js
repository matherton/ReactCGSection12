import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
  const [showPara, setShowPara] = useState(false);
  const togglePara = () => {
    setShowPara(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/*<button onClick={setShowPara(true)}>Reveal</button>*/}
      <Button onClick={togglePara}>Toggle</Button>
      {showPara && <p>This is new!</p>}
    </div>
  );
}

export default App;
