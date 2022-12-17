import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from '@mui/material'
import Home from './components/Home'
import Products from './components/Products'
import NuestrosCampeones from '../src/components/NuestosCampeones'

// import './App.css'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos/*" element={<Products />} />
          <Route path="/nuestros campeones/*" element={<NuestrosCampeones />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
