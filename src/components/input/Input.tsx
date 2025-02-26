// React
import { useContext } from "react";

// Types
import { SvgColors } from "../svg/Svg.types";
import { Theme } from "../../pages/components/navigation/components/theme-switcher/ThemeSwitcher";

// Components
import Svg from "../svg/Svg";

// Styles
import inputStyle from './Input.module.scss';

// Contexts
import { ThemeContext } from "../../context/ThemeContext";



export interface InputProps {
    id: string,
    placeholder?: string,
    value?: string,
    icon?: string,
    additionalClasses?: string,
}

export function Input({ id, placeholder, value, icon, additionalClasses }: InputProps) {
    const { theme } = useContext(ThemeContext);

    const searchIconStrokeColor = theme === Theme.LIGHT ? SvgColors.GRAY : SvgColors.WHITE;
    const displayIcon = icon ? <Svg path={icon} width="21" height="19" viewBox="0 -0.5 19 19" color={searchIconStrokeColor} /> : null;

    const classNames = additionalClasses ? additionalClasses : '';

    return (
        <div className={`${inputStyle[theme]} ${inputStyle.inputContainer} ${classNames}`}>
            {displayIcon}
            <input id={id} className={inputStyle.input} placeholder={placeholder} value={value} spellCheck='false' autoComplete="off"/>
        </div>
    )
}
