import React, { useContext } from 'react'
import { useState } from 'react'
import { themeDataContext } from '../context/ThemeContext'

const Button = () => {

    const { theme, setTheme } = useContext(themeDataContext)

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <>
            <button onClick={changeTheme}>Click Me {theme}</button>
        </>
    )
}

export default Button