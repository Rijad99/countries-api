import { CountryContent } from '../country-content/CountryContent';
import countryCardStyle from './CountryCard.module.scss';


export interface CountryProps {
    flag: string
    name: string
    population: number,
    region: string,
    capital: string
}

export function CountryCard(props: CountryProps) {

    const { name, flag, population, region, capital }= props;

    return (
        <div className={countryCardStyle.countryCard}>
            <img src={`${flag}`} className={countryCardStyle.flag} />
            <CountryContent name={name} population={population} region={region} capital={capital} />
        </div>
    )
}
