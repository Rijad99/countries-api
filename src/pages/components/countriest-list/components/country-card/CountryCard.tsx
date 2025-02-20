// Components
import { CountryContent } from '../country-content/CountryContent';

// Styles
import countryCardStyle from './CountryCard.module.scss';



export interface CountryProps {
    flag: string
    name: string
    population: number,
    region: string,
    capital: string
}

export function CountryCard({ name, flag, population, region, capital }: CountryProps) {

    return (
        <div className={countryCardStyle.countryCard}>
            <img src={`${flag}`} className={countryCardStyle.flag} />
            <CountryContent name={name} population={population} region={region} capital={capital} />
        </div>
    )
}
