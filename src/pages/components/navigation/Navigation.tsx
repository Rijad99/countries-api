// React
import { useContext } from 'react';

// Components
import { ThemeSwitcher } from './components/theme-switcher/ThemeSwitcher';

// Styles
import countriesStyle from '../../countries/Countries.module.scss';
import navigationStyle from './Navigation.module.scss';

// Contexts
import { ThemeContext } from '../../../context/ThemeContext';

export function Navigation() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={`${navigationStyle[theme]} ${countriesStyle.navigation} ${navigationStyle.navigation}`}>
      <NavigationTitle title="Where in the world?" />
      <ThemeSwitcher />
    </nav>
  );
}

export interface NavigationTitleProps {
  title: string;
}

export function NavigationTitle({ title }: NavigationTitleProps) {
  return (
    <a href={`/`}>
      <h1 className={navigationStyle.navigationTitle}>{title}</h1>
    </a>
  );
}
