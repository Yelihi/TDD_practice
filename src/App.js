import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <h3 data-testid="counter">{counter}</h3>
      <button
        data-testid="minus-button"
        onClick={() => setCounter((prev) => prev - 1)}
        disabled={disabled}
      >
        -
      </button>
      <button
        data-testid="plus-button"
        onClick={() => setCounter((prev) => prev + 1)}
        disabled={disabled}
      >
        +
      </button>
      <div>
        <button
          style={{ backgroundColor: "blue" }}
          data-testid="on/off-button"
          onClick={() => setDisabled((prev) => !prev)}
        >
          on/off
        </button>
      </div>
    </>
  );
}

export default App;
