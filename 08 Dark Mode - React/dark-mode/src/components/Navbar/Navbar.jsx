import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets';
import Home from '../Home/Home';

const Navbar = () => {
  const [mode, setMode] = useState("light-mode");

  const change =()=>{
    if(mode === "light-mode"){
      setMode("dark-mode")
    }else{
      setMode("light-mode")
    }
  }

  useEffect(()=>{
      document.querySelector("body").className=mode
  }, [mode])

  return (
    <>
    <div className="nav">
      <h1>SETHI CODER</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Career</li>
        <li>Contact</li>
        <div className="moon-icon" onClick={change}>
              {mode === "light-mode" ? <img src={assets.moon} /> : <img src={assets.sun} />} 
        </div>
      </ul>
    </div>
    <Home />
    </>
  )
}

export default Navbar