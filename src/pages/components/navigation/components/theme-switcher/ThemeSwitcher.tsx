// React
import { useContext } from 'react';

// Icons
import { icons } from '../../../../../common/icons/icons';

// Components
import Button from '../../../../../components/button/Button';
import Svg from '../../../../../components/svg/Svg';

// Types
import { ButtonSize } from '../../../../../components/button/Button.tsx';
import { SvgColors, SvgStrokeLineCap, SvgStrokeLineJoin } from '../../../../../components/svg/Svg.types';

// Contexts
import { ThemeContext } from '../../../../../context/ThemeContext';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const currentTheme = theme === Theme.LIGHT ? 'Dark Mode' : 'Light Mode';
  const themeIconStrokeColor = theme === Theme.LIGHT ? SvgColors.BLACK : SvgColors.WHITE;

  const handleChangeTheme = () => {
    if (theme === Theme.LIGHT) {
      setTheme(Theme.DARK);
      localStorage.setItem('theme', Theme.DARK);
    } else {
      setTheme(Theme.LIGHT);
      localStorage.setItem('theme', Theme.LIGHT);
    }
  };

  return (
    <Button size={ButtonSize.MEDIUM} onClick={handleChangeTheme}>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        path={icons.themeIcon}
        additionalClasses={SvgColors.BLACK}
        stroke={themeIconStrokeColor}
        strokeWidth="1.5"
        strokeLinecap={SvgStrokeLineCap.ROUND}
        strokeLinejoin={SvgStrokeLineJoin.ROUND}
      />
      <span>{currentTheme}</span>
    </Button>
  );
}
