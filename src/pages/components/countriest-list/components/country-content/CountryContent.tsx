// Styles
import countryContentStyle from './CountryContent.module.scss';



export interface CountryContentProps {
    name: string
}

export function CountryContent(props: CountryContentProps) {

    const { name }= props;

    return (
        <div className={countryContentStyle.countryContent}>
            <span className={countryContentStyle.name}>{name}</span>
        </div>
    )
}
