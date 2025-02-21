// Styles
import labelStyle from './Label.module.scss';



export interface LabelProps {
    title: string,
    value: string | number
}

export function Label({ title, value }: LabelProps) {

    return (
        <div>
            <span className={`${labelStyle.label} ${labelStyle.labelTitle}`}>{title}: </span>
            <span className={labelStyle.label}>{value}</span>
        </div>
    )
}
