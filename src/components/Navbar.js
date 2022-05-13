import React from 'react'
import style from '../styles/index.scss';
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar container">
        <NavLink to='/'className='logo'> RecetasApp </NavLink>
        <div className='nav-links'>
            <NavLink to='/'> Home </NavLink>
            <NavLink to='/login'> LogIn </NavLink>
            <NavLink to='/settings'> Perfil </NavLink>
            <NavLink to='/about'> About Us </NavLink>
        </div>
    </div>
  )
}
