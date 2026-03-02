import React, { useContext } from 'react'
import { themeDataContext } from '../context/ThemeContext'
import Button from './Button';

const NavLinks = (props) => {
  const data = useContext(themeDataContext)
  console.log(data);
  return (
    <div className='nav'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
        <Button />
      </ul>
    </div>
  )
}

export default NavLinks