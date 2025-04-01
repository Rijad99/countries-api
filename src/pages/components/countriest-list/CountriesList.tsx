// React
import { useContext } from 'react';

// Styles
import countriesStyle from '../../countries/Countries.module.scss';
import countriesListStyle from './CountriesList.module.scss';

// Components
import { CountryCard } from './components/country-card/CountryCard';
import { Dialog } from '../../../components/dialog/Dialog';

// Contexts
import { CountriesContext } from '../../../context/CountriesContext';

// Custom hooks
import { useCountriesListHook } from './components/useCountriesListHook';


export function CountriesList() {
    const { countries } = useContext(CountriesContext);
    const { handleOpenCountryDetailsDialog, isDialogOpen } = useCountriesListHook();

    const renderAllCountries = countries && countries.map((country, index) => <CountryCard key={index} flag={country.flags.png} name={country.name.common} population={country.population} region={country.region} capital={country.capital} handleOpenCountryDetailsDialog={handleOpenCountryDetailsDialog} />)
    const renderCountryDetailsDialog = isDialogOpen && <Dialog />

    return (
        <div className={`${countriesStyle.countriesList} ${countriesListStyle.countries}`}>
            {renderAllCountries}
            {renderCountryDetailsDialog}
        </div>
    )
}
