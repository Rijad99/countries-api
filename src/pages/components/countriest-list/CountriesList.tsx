// React
import { useContext, useState } from 'react';

// Styles
import countriesStyle from '../../countries/Countries.module.scss';
import countriesListStyle from './CountriesList.module.scss';

// Components
import { CountryCard } from './components/country-card/CountryCard';
import CountryDetailsDialog from './components/country-details-dialog/CountryDetailsDialog';

// Contexts
import { CountriesContext } from '../../../context/CountriesContext';
import { useCountryDetailsLoader } from './components/country-details-dialog/useCountryDetailsLoader';



export function CountriesList() {
    const { countries } = useContext(CountriesContext);

    const [isCountryDetailsDialogOpen, setIsCountryDetailsDialogOpen] = useState<boolean>(false);
    const { data, error, isFetching, refetchCountryDetails } = useCountryDetailsLoader();

    const handleOpenCountryDetailsDialog = (country: string) => {
        setIsCountryDetailsDialogOpen(true);
        refetchCountryDetails(country);
    }

        const handleCloseCountryDetailsDialog = () => {
        setIsCountryDetailsDialogOpen(false);
    }

    const renderAllCountries = countries && countries.map((country, index) => <CountryCard key={index} flag={country.flags.png} name={country.name.common} population={country.population} region={country.region} capital={country.capital} handleOpenCountryDetailsDialog={handleOpenCountryDetailsDialog} />)
    const renderCountryDetailsDialog = isCountryDetailsDialogOpen && <CountryDetailsDialog country={data} error={error} isFetchingCountryDetails={isFetching} handleCloseCountryDetailsDialog={handleCloseCountryDetailsDialog} />

    return (
        <div className={`${countriesStyle.countriesList} ${countriesListStyle.countries}`}>
            {renderAllCountries}
            {renderCountryDetailsDialog}
        </div>
    )
}
