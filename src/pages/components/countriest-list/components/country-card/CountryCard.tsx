// React
import { useContext } from 'react';

// Components
import { CountryContent } from '../country-content/CountryContent';

// Styles
import countryCardStyle from './CountryCard.module.scss';

// Contexts
import { ThemeContext } from '../../../../../context/ThemeContext';



export interface CountryProps {
    flag: string
    name: string
    population: number,
    region: string,
    capital: string,
    handleOpenCountryDetailsDialog: () => void
}

export function CountryCard({ name, flag, population, region, capital, handleOpenCountryDetailsDialog }: CountryProps) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${countryCardStyle[theme]} ${countryCardStyle.countryCard}`} onClick={handleOpenCountryDetailsDialog}>
            <img src={`${flag}`} className={countryCardStyle.flag} />
            <CountryContent name={name} population={population} region={region} capital={capital} />
        </div>
    )
}
