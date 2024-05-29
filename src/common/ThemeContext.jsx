import {createContext, useContext, useEffect, useState} from "react"

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  )

  useEffect (() => {
    document.body.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => {
    setTheme((theme) => (theme === 'light'? 'dark' : 'light'))
  }

  return(
    <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
  )
}

