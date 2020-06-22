import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <input type="text" name="password" id="password" />
      <button id="copy">
        <span role="img" aria-label="clipboard">
          &#128203;
        </span>
      </button>
      <button id="generate">Generate</button>
      <div className="options">
        <input
          type="checkbox"
          id="uppercase"
          name="uppercase"
          value="uppercase"
        />
        <label for="uppercase"> Include uppercase letters</label>
        <input
          type="checkbox"
          id="lowercase"
          name="lowercase"
          value="lowercase"
        />
        <label for="lowercase"> Include lowercase letters</label>
        <input type="checkbox" id="numbers" name="numbers" value="numbers" />
        <label for="numbers"> Include numbers</label>
        <input type="checkbox" id="symbols" name="symbols" value="symbols" />
        <label for="symbols"> Include symbols</label>
      </div>
    </div>
  );
}

export default App;
