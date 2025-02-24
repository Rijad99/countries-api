// React
import { useState, createContext, useEffect } from "react";

// Types
import { Theme } from "../pages/components/navigation/components/theme-switcher/ThemeSwitcher";

// Styles
import themeStyle from '../styling/themes.module.scss';



interface ThemeContextProps {
    theme: string | null
    setTheme: (theme: string) => void
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: null,
    setTheme: () => null
})

interface ThemeProviderProps {
    children: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<string>(Theme.LIGHT);

    useEffect(() => {
        localStorage.setItem('theme', theme);

        if (theme === "light") {
            document.documentElement.classList.remove(themeStyle.darkMode);
            document.documentElement.classList.add(themeStyle.lightMode);

          } else {
            document.documentElement.classList.remove(themeStyle.lightMode);
            document.documentElement.classList.add(themeStyle.darkMode);
          }
    }, [theme])

    const value = {
        theme,
        setTheme
    }

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
