// React
import { useState } from 'react';

// Icons
import { icons } from '../../../../../common/icons/icons';

// Components
import Button from '../../../../../components/button/Button';
import Svg from '../../../../../components/svg/Svg';

// Types
import { ButtonSize, ButtonType } from '../../../../../components/button/Button.types';
import { SvgColors, SvgStrokeLineCap, SvgStrokeLineJoin } from '../../../../../components/svg/Svg.types';

// Styles
import themeSwitcherStyle from './ThemeSwitcher.module.scss';



export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export function ThemeSwitcher() {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

    const currentTheme = theme === Theme.LIGHT ? 'Dark Mode' : 'Light Mode';

    const handleChangeTheme = () => {
        if (theme === Theme.LIGHT) {
            setTheme(Theme.DARK)
        } else {
            setTheme(Theme.LIGHT)
        }
    }
    
    return (
        <Button size={ButtonSize.MEDIUM} type={ButtonType.PRIMARY} onClick={handleChangeTheme} additionalClasses={themeSwitcherStyle.themeSwitcherBtn}>
            <Svg width='24' height='24' viewBox='0 0 24 24' path={icons.themeIcon} additionalClasses={SvgColors.BLACK} stroke={SvgColors.BLACK} strokeWidth='1.5' strokeLinecap={SvgStrokeLineCap.ROUND} strokeLinejoin={SvgStrokeLineJoin.ROUND} />
            <span>{currentTheme}</span>
        </Button>
    )
}
