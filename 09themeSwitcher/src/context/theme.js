import { createContext, useContext } from 'react'

export const ThemeContext = createContext({
  themeMode: 'light', //variable
  darkTheme: () => {}, //methods
  lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
  return useContext(ThemeContext)
}
