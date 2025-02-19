// React
import { useContext } from 'react';

// Styles
import countriesStyle from '../../countries/Countries.module.scss';
import countriesListStyle from './CountriesList.module.scss';

// Components
import { CountryCard } from './components/country-card/CountryCard';
import { CountriesContext } from '../../../context/CountriesContext';



export function CountriesList() {
    const { countries } = useContext(CountriesContext);

    const renderAllCountries = countries && countries.map((country, index) => <CountryCard key={index} flag={country.flags.png} name={country.name.common} population={country.population} region={country.region} capital={country.capital} />)

    return (
        <div className={`${countriesStyle.countriesList} ${countriesListStyle.countries}`}>
            {renderAllCountries}
        </div>
    )
}
