import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from "./Components/About/About"
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'


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
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
    </div>
  )
}

export default App