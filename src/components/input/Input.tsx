// Icons
import Svg from "../svg/Svg";
import { SvgColors } from "../svg/Svg.types";

// Styles
import inputStyle from './Input.module.scss';



export interface InputProps {
    id: string,
    placeholder?: string,
    value?: string,
    icon?: string,
    additionalClasses?: string,
}

export function Input({ id, placeholder, value, icon, additionalClasses }: InputProps) {

    const displayIcon = icon ? <Svg path={icon} width="21" height="19" viewBox="0 -0.5 19 19" color={SvgColors.GRAY} /> : null;

    const classNames = additionalClasses ? additionalClasses : '';

    return (
        <div className={`${inputStyle.inputContainer} ${classNames}`}>
            {displayIcon}
            <input id={id} className={inputStyle.input} placeholder={placeholder} value={value} spellCheck='false' />
        </div>
    )
}
