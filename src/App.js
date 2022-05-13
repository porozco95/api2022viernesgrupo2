import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Recipes from './components/Recipes'
import Navbar from "./components/Navbar";


const App = () => {
  return (
  <BrowserRouter>

    <Navbar />
    <Routes>
      <Route path='/' element={<Recipes />} />
      <Route path='/about' element={<div>About</div>} />
      <Route path='/login' element={<div>Login</div>} />
      <Route path='*' element={<div>404 Not Found</div>} />
    </Routes>   
  </BrowserRouter>
    
  )
}

export default App;
