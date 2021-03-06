import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import RandExp from "randexp";
import zxcvbn from "zxcvbn";
import "./reset.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [isUppercase, setIsUppercase] = useState(true);
  const [isLowercase, setIsLowercase] = useState(true);
  const [isNumber, setIsNumber] = useState(true);
  const [isSymbol, setIsSymbol] = useState(false);
  const [len, setLen] = useState(14);

  useEffect(() => {
    let s = zxcvbn(password);
    console.log(s);
    let pw = document.getElementById("password");
    if (password !== "") {
      if (s.score === 0) pw.style.border = "5px solid red";
      else if (s.score === 1) pw.style.border = "5px solid orange";
      else if (s.score === 2) pw.style.border = "5px solid yellow";
      else if (s.score === 3) pw.style.border = "5px solid lightgreen";
      else if (s.score === 4) pw.style.border = "5px solid green";
    } else {
      pw.style.border = "none";
    }
  }, [password]);

  useEffect(() => {
    notify("feel free to test the strength of your own passwords ;)", {
      delay: 1500,
    });
  }, []);

  const notify = (msg, options = {}) =>
    toast(msg, {
      ...options,
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="container">
      <div id="result">
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          placeholder="generated password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          id="copy"
          onClick={(e) => {
            let pass = document.getElementById("password");
            pass.focus();
            pass.select();

            try {
              document.execCommand("copy");
              notify("Copied password to the clipboard");
            } catch (err) {
              notify("Oops, unable to copy");
            } finally {
              pass.blur();
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
            maxLength="2"
            onChange={(e) => {
              if (e.target.value.match("^[0-9]*$")) setLen(e.target.value);
            }}
          />
          <label htmlFor="length"> Length </label>
        </div>
        <div id="checkboxes">
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
      <ToastContainer />
    </div>
  );
}

export default App;
