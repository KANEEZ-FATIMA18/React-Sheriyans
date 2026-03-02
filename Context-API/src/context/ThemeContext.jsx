import { createContext } from 'react'
import { useState } from 'react'

const themeDataContext = createContext()

const ThemeContext = (props) => {

     const [theme, setTheme] = useState('dark')
  return (
  <themeDataContext.Provider value={{theme, setTheme}}>
    {props.children}
  </themeDataContext.Provider>
  )
}

export default ThemeContext
export {themeDataContext }