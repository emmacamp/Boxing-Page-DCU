import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from '@mui/material'
import Home from './components/Home'
import Products from './components/Products'
import NuestrosCampeones from '../src/components/NuestosCampeones'

// import './App.css'

import Register from './components/Register'
import Users from './components/Users';
import NotFound from './components/NotFound';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/campeones" element={<NuestrosCampeones />} />
          <Route path="/register" element={<Register />} />
          <Route path="/usuarios" element={<Users />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
