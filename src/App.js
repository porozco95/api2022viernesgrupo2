import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Recipes from './components/Recipes'
import Navbar from "./components/Navbar";
import Login from "./components/Login";


const App = () => {
  return (
  <BrowserRouter>

    <Navbar />
    <Routes>
      <Route path='/' element={<div>Home</div>} />
      <Route path='/recipes' element={<Recipes />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<div>404 Not Found</div>} />
    </Routes>   
  </BrowserRouter>
    
  )
}

export default App;
