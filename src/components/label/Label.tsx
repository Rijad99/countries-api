// Styles
import labelStyle from './Label.module.scss';



export enum LabelType {
    SMALL = 'SMALL',
    LARGE = 'LARGE'
}

export interface LabelProps {
    title: string,
    value?: string | number
    type?: LabelType
}

export function Label({ title, value, type }: LabelProps) {

    const renderValue = value ? <span className={labelStyle.label}>{value}</span> : null;
    const labelType = type === LabelType.LARGE ? labelStyle.large : labelStyle.small;

    return (
        <div className={labelType}>
            <span className={`${labelStyle.labelTitle}`}>{title}: </span>
            {renderValue}
        </div>
    )
}
