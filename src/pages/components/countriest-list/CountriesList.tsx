// React
import { useEffect, useState } from 'react';

// Styles
import countriesStyle from '../../countries/Countries.module.scss';
import countriesListStyle from './CountriesList.module.scss';

// Response types
import { Country } from '../../../services/countries-response-types/CountriesResponseTypes';

// Service
import { getAllCountries } from '../../../services/CountriesService';

// Components
import { CountryCard } from './components/country-card/CountryCard';



export function CountriesList() {
    const [countries, setCountries] = useState<Country[] | null>([]);

    useEffect(() => {
        getAllCountries()
            .then((data) => {
                console.log(data);
                setCountries(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const renderAllCountries = countries && countries.map((country, index) => <CountryCard key={index} flag={country.flags.png} name={country.name.common} population={country.population} region={country.region} capital={country.capital} />)

    return (
        <div className={`${countriesStyle.countriesList} ${countriesListStyle.countries}`}>
            {renderAllCountries}
        </div>
    )
}
