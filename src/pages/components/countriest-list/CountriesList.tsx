// React
import { useContext } from 'react';

// Styles
import countriesStyle from '../../countries/Countries.module.scss';
import countriesListStyle from './CountriesList.module.scss';

// Components
import { CountryCard } from './components/country-card/CountryCard';
import CountryDetailsDialog from './components/country-details-dialog/CountryDetailsDialog';

// Contexts
import { CountriesContext } from '../../../context/CountriesContext';

// Custom hooks
import { useCountriesListHook } from './useCountriesListHook';



export function CountriesList() {
    const { countries } = useContext(CountriesContext);
    const { handleOpenCountryDetailsDialog, handleCloseCountryDetailsDialog, isCountryDetailsDialogOpen } = useCountriesListHook();
 
    const renderAllCountries = countries && countries.map((country, index) => <CountryCard key={index} flag={country.flags.png} name={country.name.common} population={country.population} region={country.region} capital={country.capital} handleOpenCountryDetailsDialog={handleOpenCountryDetailsDialog} />)
    const renderCountryDetailsDialog = isCountryDetailsDialogOpen && <CountryDetailsDialog handleCloseCountryDetailsDialog={handleCloseCountryDetailsDialog} />

    return (
        <div className={`${countriesStyle.countriesList} ${countriesListStyle.countries}`}>
            {renderAllCountries}
            {renderCountryDetailsDialog}
        </div>
    )
}
