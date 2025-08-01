import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Nav from './Components/Nav/Nav'

function App() {  

  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        
      </Routes> 
    </Router>   
    </>
  )
}

export default App
