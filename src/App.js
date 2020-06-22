import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  useEffect(() => {
    console.log("pass", password);
    console.log("up", uppercase);
    console.log("low", lowercase);
    console.log("num", numbers);
    console.log("sym", symbols);
  }, [password, uppercase, lowercase, numbers, symbols]);

  return (
    <div className="container">
      <input type="text" name="password" id="password" />
      <button id="copy">
        <span role="img" aria-label="clipboard">
          &#128203;
        </span>
      </button>
      <button
        id="generate"
        onClick={() => setPassword(document.getElementById("password").value)}
      >
        Generate
      </button>
      <div id="options">
        <div className="option">
          <input
            type="checkbox"
            id="uppercase"
            name="uppercase"
            value={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
          <label htmlFor="uppercase"> Include uppercase letters</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="lowercase"
            name="lowercase"
            value={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
          <label htmlFor="lowercase"> Include lowercase letters</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="numbers"
            name="numbers"
            value={numbers}
            onChange={() => setNumbers(!numbers)}
          />
          <label htmlFor="numbers"> Include numbers</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="symbols"
            name="symbols"
            value={symbols}
            onChange={() => setSymbols(!symbols)}
          />
          <label htmlFor="symbols"> Include symbols</label>
        </div>
      </div>
    </div>
  );
}

export default App;
