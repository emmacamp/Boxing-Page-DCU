import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from '@mui/material'
import Home from './components/Home'
import Products from './components/Products'

import reactLogo from './assets/react.svg'
// import './App.css'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/*" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
