// React
import { useState } from 'react';

// Styles
import countriesStyle from '../../countries/Countries.module.scss';
import countriesListStyle from './CountriesList.module.scss';

// Components
import { CountryCard } from './components/country-card/CountryCard';
import CountryDetailsDialog from './components/country-details-dialog/CountryDetailsDialog';

// Contexts
import { useCountryDetailsLoader } from './components/country-details-dialog/useCountryDetailsLoader';
import { Country } from '../../countries/countries-types/CountriesTypes.ts';
import { CountriesSkeletonLoader } from './CountriesSkeletonLoader.tsx';

export interface CountriesListProps {
  countries: Country[] | undefined;
  countriesError: Error | null;
  isFetchingCountries: boolean;
}

export function CountriesList({ countries, countriesError, isFetchingCountries }: CountriesListProps) {
  const [isCountryDetailsDialogOpen, setIsCountryDetailsDialogOpen] = useState<boolean>(false);
  const { data, error, isFetching, refetchCountryDetails } = useCountryDetailsLoader();

  const handleOpenCountryDetailsDialog = (country: string) => {
    setIsCountryDetailsDialogOpen(true);
    refetchCountryDetails(country);
  };

  const handleCloseCountryDetailsDialog = () => {
    setIsCountryDetailsDialogOpen(false);
  };

  const renderCountriesError = countriesError && <div>Error Component Placeholder</div>;
  const renderCountriesSkeletonLoader = isFetchingCountries && <CountriesSkeletonLoader />;
  const renderCountries =
    !isFetchingCountries &&
    countries &&
    countries.map((country, index) => (
      <CountryCard
        key={index}
        flag={country.flags.png}
        name={country.name.common}
        population={country.population}
        region={country.region}
        capital={country.capital}
        handleOpenCountryDetailsDialog={handleOpenCountryDetailsDialog}
      />
    ));
  const renderCountryDetailsDialog = isCountryDetailsDialogOpen && (
    <CountryDetailsDialog
      country={data}
      error={error}
      isFetchingCountryDetails={isFetching}
      handleCloseCountryDetailsDialog={handleCloseCountryDetailsDialog}
    />
  );

  return (
    <div className={`${countriesStyle.countriesList} ${countriesListStyle.countries}`}>
      {renderCountriesSkeletonLoader}
      {renderCountries}
      {renderCountriesError}
      {renderCountryDetailsDialog}
    </div>
  );
}
