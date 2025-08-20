// React
import { useState, createContext, useEffect } from 'react';

// Types
import { Theme } from '../pages/components/navigation/components/theme-switcher/ThemeSwitcher';

// Styles
import themeStyle from '../styling/themes.module.scss';

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  setTheme: () => null,
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>(Theme.LIGHT);

  const currentTheme = localStorage.getItem('theme');

  useEffect(() => {
    if (!currentTheme) {
      localStorage.setItem('theme', theme);
    } else {
      setTheme(currentTheme);
    }

    if (theme === 'light') {
      document.body.classList.remove(themeStyle.darkMode);
      document.body.classList.add(themeStyle.lightMode);
    } else {
      document.body.classList.remove(themeStyle.lightMode);
      document.body.classList.add(themeStyle.darkMode);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
