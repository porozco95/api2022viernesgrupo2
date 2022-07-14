import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Navbar from '../components/Navbar'
import Recipe from './Recipe'
import Login from '../components/Login2'
import Searched from './Searched'
import {Route, Routes } from 'react-router-dom'

function Pages() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:type" element={<Cuisine />} />
        <Route path="/login" element={<Login />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
  )
}

export default Pages