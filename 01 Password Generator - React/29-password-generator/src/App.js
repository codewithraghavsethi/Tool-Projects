import "./App.css";
import { useState } from "react";
import { UC, LC, NC, SC } from "./data/PassChar";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passlength, setPasslength] = useState(10);
  let [fpass, setFpass] = useState("");

  let creatPassword = () => {
    let finalPass= "";
    let charSet = "";

    if (uppercase || lowercase || numbers || symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (numbers) charSet += NC;
      if (symbols) charSet += SC;
      for(let i=0; i<passlength; i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setFpass(finalPass)
      // console.log(charSet , charSet.length)
    } else {
      alert("Please Select One Checkbox...!");
    }
  };


let copyPass=()=>{
  navigator.clipboard.writeText(fpass);
}


  return (
    <div className="passwordBox">
      <h2>Password Genrater</h2>

      <div className="passwordBoxIn">
        <input type="text" readOnly  value={fpass}/> <button onClick={copyPass}>Copy</button>
      </div>

      <div className="passwordLength">
        <label>Password Length</label>
        <input
          type="number"
          max={20}
          min={10}
          value={passlength}
          onChange={(event) => setPasslength(event.target.value)}
        />
      </div>

      <div className="passwordLength">
        <label>Included Uppercase Letters</label>
        <input
          type="checkbox"
          checked={uppercase}
          onChange={() => setUppercase(!uppercase)}
        />
      </div>

      <div className="passwordLength">
        <label>Included Lowercase Letters</label>
        <input
          type="checkbox"
          checked={lowercase}
          onChange={() => setLowercase(!lowercase)}
        />
      </div>

      <div className="passwordLength">
        <label>Included Numbers</label>
        <input
          type="checkbox"
          checked={numbers}
          onChange={() => setNumbers(!numbers)}
        />
      </div>

      <div className="passwordLength">
        <label>Included Symbols</label>
        <input
          type="checkbox"
          checked={symbols}
          onChange={() => setSymbols(!symbols)}
        />
      </div>

      <div>
        <button className="btn" onClick={creatPassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
