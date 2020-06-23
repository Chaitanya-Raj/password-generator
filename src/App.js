import React, { useState, useEffect } from "react";
import RandExp from "randexp";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [isUppercase, setIsUppercase] = useState(true);
  const [isLowercase, setIsLowercase] = useState(true);
  const [isNumber, setIsNumber] = useState(true);
  const [isSymbol, setIsSymbol] = useState(true);
  const [len, setLen] = useState(12);

  useEffect(() => {}, []);

  useEffect(() => {
    console.log("pass", password);
    console.log("up", isUppercase);
    console.log("low", isLowercase);
    console.log("num", isNumber);
    console.log("sym", isSymbol);
    console.log("len", len);
  }, [password, isUppercase, isLowercase, isNumber, isSymbol, len]);

  return (
    <div className="container">
      <div id="result">
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          placeholder="generated password"
          readOnly
        />
        <button
          id="copy"
          onClick={(e) => {
            let pass = document.getElementById("password");
            pass.focus();
            pass.select();

            try {
              let successful = document.execCommand("copy");
              let msg = successful ? "successful" : "unsuccessful";
              console.log("Copying text command was " + msg);
            } catch (err) {
              console.log("Oops, unable to copy");
            }
          }}
        >
          <span role="img" aria-label="clipboard">
            &#128203;
          </span>
        </button>
        <button
          id="generate"
          onClick={() => {
            let re = "";
            if (isLowercase) re += "a-z";
            if (isUppercase) re += "A-Z";
            if (isNumber) re += "0-9";
            if (isSymbol) re += "$!@#%?&.";
            if (len !== "" && len >= 0) {
              let randexp = new RandExp(`[${re}]{${len}}`);
              setPassword(randexp.gen());
            }
          }}
        >
          Generate
        </button>
      </div>
      <div id="options">
        <div className="option">
          <input
            type="text"
            id="length"
            name="length"
            value={len}
            onChange={(e) => {
              if (e.target.value.match(/[0-9]*/)) setLen(e.target.value);
            }}
          />
          <label htmlFor="isUppercase"> Length </label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="uppercase"
            name="uppercase"
            checked={isUppercase}
            onChange={() => setIsUppercase(!isUppercase)}
          />
          <label htmlFor="uppercase"> Include uppercase letters</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="lowercase"
            name="lowercase"
            checked={isLowercase}
            onChange={() => setIsLowercase(!isLowercase)}
          />
          <label htmlFor="lowercase"> Include lowercase letters</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="number"
            name="number"
            checked={isNumber}
            onChange={() => setIsNumber(!isNumber)}
          />
          <label htmlFor="number"> Include numbers</label>
        </div>
        <div className="option">
          <input
            type="checkbox"
            id="symbol"
            name="symbol"
            checked={isSymbol}
            onChange={() => setIsSymbol(!isSymbol)}
          />
          <label htmlFor="symbol"> Include symbols</label>
        </div>
      </div>
    </div>
  );
}

export default App;
