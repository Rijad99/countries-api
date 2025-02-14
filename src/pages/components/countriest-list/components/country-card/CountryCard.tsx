import { CountryContent } from '../country-content/CountryContent';
import countryCardStyle from './CountryCard.module.scss';


export interface CountryProps {
    flag: string
    name: string
}

export function CountryCard(props: CountryProps) {

    const { name, flag }= props;

    return (
        <div className={countryCardStyle.countryCard}>
            <img src={`${flag}`} className={countryCardStyle.flag} />
            <CountryContent name={name} />
        </div>
    )
}
