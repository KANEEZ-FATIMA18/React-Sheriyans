import React, { useContext } from 'react'
import NavLinks from './Nav-links'
import { themeDataContext } from '../context/ThemeContext'

const Navbar = () => {
    const { theme } =useContext(themeDataContext)

  return (
    <div className={`nav ${theme}`}>
        <h1>Navbar</h1>
        <NavLinks/>
    </div>
  )
}

export default Navbar