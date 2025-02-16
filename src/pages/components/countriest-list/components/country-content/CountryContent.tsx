// Styles
import countryContentStyle from './CountryContent.module.scss';



export interface CountryContentProps {
    name: string,
    population: number,
    region: string,
    capital: string
}

export function CountryContent(props: CountryContentProps) {

    const { name, population, region, capital }= props;

    return (
        <div className={countryContentStyle.countryContent}>
            <span className={countryContentStyle.name}>{name}</span>
            <div className={countryContentStyle.countryBaseInfo}>
                <span><span className={countryContentStyle.infoLabel}>Population:</span> {population}</span>
                <span><span className={countryContentStyle.infoLabel}>Region:</span> {region}</span>
                <span><span className={countryContentStyle.infoLabel}>Capital:</span> {capital}</span>
            </div>
        </div>
    )
}
