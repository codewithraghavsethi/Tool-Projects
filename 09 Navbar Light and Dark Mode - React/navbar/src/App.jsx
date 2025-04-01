import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from "./Components/About/About"

const App = () => {

  const current_theme = localStorage.getItem("current_theme")

  const [theme, setTheme] = useState(current_theme ? current_theme : "light")

  useEffect(()=>{
    localStorage.setItem("current_theme", theme)
  }, [theme])

  return (
    <div className={`container ${theme} `} >
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App