import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [pstatus, setPstatus] = useState(false);
  return (
    <div className="App">
      <input type={pstatus ? "text" : "password"} /> 
      <button onClick={()=>setPstatus(!pstatus)}>{pstatus ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
