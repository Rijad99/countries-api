// Icons
import Svg from "../svg/Svg";

// Styles
import inputStyle from './Input.module.scss';



export interface InputProps {
    id: string,
    placeholder?: string,
    value?: string
    icon?: string
}

export function Input({ id, placeholder, value, icon }: InputProps) {

    const displayIcon = icon ? <Svg path={icon}  width="8" height="6" viewBox="0 0 12 7" /> : null;

    return (
        <div className={inputStyle.inputContainer}>
            {displayIcon}
            <input id={id} className={inputStyle.input} placeholder={placeholder} value={value} spellCheck='false' />
        </div>
    )
}
